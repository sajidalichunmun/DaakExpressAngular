import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CountryService } from 'src/app/services/country/country.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(
    public countryService: CountryService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CountryComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.countryService.form.reset();
    this.countryService.initializeFormGroup();
  }

  onSubmit(){
    if(this.countryService.form.valid){
      if(this.countryService.form.get('id').value === null){
        this.countryService.add(this.countryService.form.value).subscribe(
          (res) => {
            this.countryService.form.reset();
            this.countryService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.countryService.update(this.countryService.form.value , this.countryService.form.get('id').value)
          .subscribe(
            (res) => {
              this.countryService.form.reset();
              this.countryService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.countryService.form.reset();
    this.countryService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
