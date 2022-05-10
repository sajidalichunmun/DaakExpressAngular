import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StateService } from 'src/app/services/state/state.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(
    public stateService: StateService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<StateComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.stateService.form.reset();
    this.stateService.initializeFormGroup();
  }

  onSubmit(){
    if(this.stateService.form.valid){
      if(this.stateService.form.get('id').value === null){
        this.stateService.add(this.stateService.form.value).subscribe(
          (res) => {
            this.stateService.form.reset();
            this.stateService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.stateService.update(this.stateService.form.value , this.stateService.form.get('id').value)
          .subscribe(
            (res) => {
              this.stateService.form.reset();
              this.stateService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.stateService.form.reset();
    this.stateService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
