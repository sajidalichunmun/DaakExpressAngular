import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CityService } from 'src/app/services/city/city.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(
    public cityService: CityService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CityComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.cityService.form.reset();
    this.cityService.initializeFormGroup();
  }

  onSubmit(){
    if(this.cityService.form.valid){
      if(this.cityService.form.get('id').value === null){
        this.cityService.add(this.cityService.form.value).subscribe(
          (res) => {
            this.cityService.form.reset();
            this.cityService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.cityService.update(this.cityService.form.value , this.cityService.form.get('id').value)
          .subscribe(
            (res) => {
              this.cityService.form.reset();
              this.cityService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.cityService.form.reset();
    this.cityService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
