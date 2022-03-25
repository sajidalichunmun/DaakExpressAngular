import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPacketType } from 'src/app/dtos/ipackettype';
import { PackettypeService } from 'src/app/services/packettype/packettype.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { PackettypeComponent } from '../packettype/packettype.component';

@Component({
  selector: 'app-packettypelist',
  templateUrl: './packettypelist.component.html',
  styleUrls: ['./packettypelist.component.css']
})
export class PackettypelistComponent implements OnInit {

  
  messageTemplate!: IPacketType;

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  searchKey:string;
  displayedColumns: string[] = ["id", "name", "code", "createdby", "createdon", "updatedby", "updatedon", "isactive", "action"];


  constructor(
    public packetService: PackettypeService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService,
  ) {

  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.fillData();
  }

  fillData() {
    this.packetService.ELEMENT_DATA = [];
    this.packetService.list().subscribe({
      next: (res: any) => {
        
        if(res.status === "success"){
        this.packetService.ELEMENT_DATA = res.data;
        this.packetService.dataSource = new MatTableDataSource(this.packetService.ELEMENT_DATA);
        this.packetService.dataSource.sort = this.sort;
        this.packetService.dataSource.paginator = this.paginator;
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.packetService.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearData() {
    this.searchKey = "";
  }

  initializeValues() {
    this.messageTemplate =
    {
      id: 0,
      name: "",
      packettypeshortcode:'',
      createdby: "",
      createdon: null,
      updatedby: '',
      updatedon: null,
      isactive: ''
    };
  }

  onCreate() {
    this.initializeValues();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PackettypeComponent, dialogConfig).afterClosed().subscribe(val => {
      if (val === "save") {
        this.fillData();
      }
    });
  }

  onEdit(row: IPacketType): void {
    this.packetService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PackettypeComponent, dialogConfig).afterClosed().subscribe(val => {
      if (val === "update") {
        this.fillData();
      }
    });
  }

  onDelete(item) {
    if (item.id <= 0) {
      this.snackBar.open("Id should be grater than zero");
      return;
    }
    this.dialogService.openConfirmDialog("Are you sure to delete this record ?").afterClosed().subscribe(
      (res) =>{
        if(res === true){
          this.packetService.delete(item.ID).subscribe({
            next: (res: any) => {
              this.packetService.deleteFromMatDataTableSource(item);
              this.notificationService.warn("! Deleted successfully");
            },
            error: (err) => {
              console.log(err.message);
            }
          });
        }
      }
    ).closed;
      
  }
  
}

