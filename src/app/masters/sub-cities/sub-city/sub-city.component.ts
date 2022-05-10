import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SubcityService } from 'src/app/services/subcity/subcity.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-sub-city',
  templateUrl: './sub-city.component.html',
  styleUrls: ['./sub-city.component.css']
})
export class SubCityComponent implements OnInit {

  constructor(
    public subCityService: SubcityService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<SubCityComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.subCityService.form.reset();
    this.subCityService.initializeFormGroup();
  }

  onSubmit(){
    if(this.subCityService.form.valid){
      if(this.subCityService.form.get('id').value === null){
        this.subCityService.add(this.subCityService.form.value).subscribe(
          (res) => {
            this.subCityService.form.reset();
            this.subCityService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.subCityService.update(this.subCityService.form.value , this.subCityService.form.get('id').value)
          .subscribe(
            (res) => {
              this.subCityService.form.reset();
              this.subCityService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.subCityService.form.reset();
    this.subCityService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
