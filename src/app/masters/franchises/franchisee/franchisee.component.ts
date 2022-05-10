import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FranchiseeService } from 'src/app/services/franchisee/franchisee.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-franchisee',
  templateUrl: './franchisee.component.html',
  styleUrls: ['./franchisee.component.css']
})
export class FranchiseeComponent implements OnInit {

  constructor(
    public franchiseeService: FranchiseeService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<FranchiseeComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.franchiseeService.form.reset();
    this.franchiseeService.initializeFormGroup();
  }

  onSubmit(){
    if(this.franchiseeService.form.valid){
      if(this.franchiseeService.form.get('id').value === null){
        this.franchiseeService.add(this.franchiseeService.form.value).subscribe(
          (res) => {
            this.franchiseeService.form.reset();
            this.franchiseeService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.franchiseeService.update(this.franchiseeService.form.value , this.franchiseeService.form.get('id').value)
          .subscribe(
            (res) => {
              this.franchiseeService.form.reset();
              this.franchiseeService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.franchiseeService.form.reset();
    this.franchiseeService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}

