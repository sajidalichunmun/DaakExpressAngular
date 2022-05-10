import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MajorService } from 'src/app/services/major/major.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {

  constructor(
    public majorService: MajorService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<MajorComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.majorService.form.reset();
    this.majorService.initializeFormGroup();
  }

  onSubmit(){
    if(this.majorService.form.valid){
      if(this.majorService.form.get('id').value === null){
        this.majorService.add(this.majorService.form.value).subscribe(
          (res) => {
            this.majorService.form.reset();
            this.majorService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.majorService.update(this.majorService.form.value , this.majorService.form.get('id').value)
          .subscribe(
            (res) => {
              this.majorService.form.reset();
              this.majorService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.majorService.form.reset();
    this.majorService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
