import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RelationService } from 'src/app/services/relation/relation.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent implements OnInit {

  
  constructor(
    public relationService: RelationService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<RelationComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.relationService.form.reset();
    this.relationService.initializeFormGroup();
  }

  onSubmit(){
    if(this.relationService.form.valid){
      if(this.relationService.form.get('id').value === null){
        this.relationService.add(this.relationService.form.value).subscribe(
          (res) => {
            this.relationService.form.reset();
            this.relationService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.relationService.update(this.relationService.form.value , this.relationService.form.get('id').value)
          .subscribe(
            (res) => {
              this.relationService.form.reset();
              this.relationService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.relationService.form.reset();
    this.relationService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
