import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ReasonService } from 'src/app/services/reason/reason.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  constructor(
    public reasonService: ReasonService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ReasonComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.reasonService.form.reset();
    this.reasonService.initializeFormGroup();
  }

  onSubmit(){
    if(this.reasonService.form.valid){
      if(this.reasonService.form.get('id').value === null){
        this.reasonService.add(this.reasonService.form.value).subscribe(
          (res) => {
            this.reasonService.form.reset();
            this.reasonService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.reasonService.update(this.reasonService.form.value , this.reasonService.form.get('id').value)
          .subscribe(
            (res) => {
              this.reasonService.form.reset();
              this.reasonService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.reasonService.form.reset();
    this.reasonService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}

