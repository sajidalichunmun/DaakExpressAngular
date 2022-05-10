import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubCityResponse } from 'src/app/dtos/sub-city-response';
import { SubcityService } from 'src/app/services/subcity/subcity.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { SubCityComponent } from '../sub-city/sub-city.component';

@Component({
  selector: 'app-sub-city-list',
  templateUrl: './sub-city-list.component.html',
  styleUrls: ['./sub-city-list.component.css']
})
export class SubCityListComponent implements OnInit {

  ELEMENT_DATA: SubCityResponse[] = [];
  displayedColumns: string[] = ['id', 'name', 'mainarea', 'pincode', 'city', 'state', 'country', 'createdby', 'createdon', 'updatedby', 'updatedon', 'isactive', 'actions'];
  dataSource: MatTableDataSource<SubCityResponse>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator)  paginator: MatPaginator;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  searchKey:any;
  
  constructor(
    private subCityService: SubcityService,
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
    this.subCityService.list().subscribe(
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
    this.dialog.open(SubCityComponent,dialogConfi)
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
    this.subCityService.populateForm(row);
    const index = this.dataSource.filteredData.indexOf(row);
    
    const dialogConfi = new MatDialogConfig();
    dialogConfi.autoFocus = true;
    dialogConfi.disableClose = true;
    dialogConfi.width = "50%";
    this.dialog.open(SubCityComponent,dialogConfi)
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
            this.subCityService.delete(row.ID).subscribe(
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

