import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientResponse } from 'src/app/dtos/client-response';
import { ClientService } from 'src/app/services/client/client.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  ELEMENT_DATA: ClientResponse[] = [];
  displayedColumns: string[] = ['id', 'major', 'name', 'code', 'person', 'mobileno', 'phone', 'gstno', 'createdby', 'createdon', 'updatedby', 'updatedon', 'isactive', 'actions'];
  dataSource: MatTableDataSource<ClientResponse>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator)  paginator: MatPaginator;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  searchKey:any;
  
  constructor(
    private clientService: ClientService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService,
    
    ) { }

  ngOnInit(): void {
    this.list();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  list(){
    this.clientService.list().subscribe(
      (res) =>{
        
        if(res["status"] === "success"){
          this.ELEMENT_DATA = res["data"]
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      }
    )
  }
  onCreate(){
    const dialogConfi = new MatDialogConfig();
    dialogConfi.autoFocus = true;
    dialogConfi.disableClose = true;
    dialogConfi.width = "50%";
    this.dialog.open(ClientComponent,dialogConfi)
    .afterClosed()
      .subscribe(val => {
        if (val['curd_option'] === "save") {
          
          let data = val['data']
          data.ID = val['data']['id'];
          this.ELEMENT_DATA.unshift(data);
          this.dataSource._updateChangeSubscription();
        }
    });
  }
  onEdit(row){
    this.clientService.populateForm(row);
    const index = this.dataSource.filteredData.indexOf(row);
    
    const dialogConfi = new MatDialogConfig();
    dialogConfi.autoFocus = true;
    dialogConfi.disableClose = true;
    dialogConfi.width = "50%";
    this.dialog.open(ClientComponent,dialogConfi)
    .afterClosed()
      .subscribe(val => {
        if (val['curd_option'] === "update") {
          let index = this.ELEMENT_DATA.indexOf(row);
          row = val['data'];
          this.ELEMENT_DATA[index] = row;
          this.dataSource._updateChangeSubscription();
        }
    });
  }

  onDelete(row){
    const index = this.dataSource.filteredData.indexOf(row);
    this.dialogService.openConfirmDialog("Are you sure to delete this record ?")
      .afterClosed().subscribe(
        (res) =>{
          if(res === true){
            this.clientService.delete(row.ID).subscribe(
              (res) => {
                if(res['status'] === 'success'){
                  this.notificationService.warn('! Deleted successfully');
                  this.dataSource.data.splice(index, 1);
                  this.dataSource._updateChangeSubscription();
                }
              }
            )
          }
        }
      )
  }

  applyFilter1(){
    this.dataSource.data.filter(e => e.name.trim().toLowerCase() === this.searchKey.trim().toLowerCase());
  }
  onSearchClear(){
    this.searchKey = "";
    this.applyFilter1();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearData() {
    this.searchKey = "";
    this.dataSource.filter = '';
  }
}

