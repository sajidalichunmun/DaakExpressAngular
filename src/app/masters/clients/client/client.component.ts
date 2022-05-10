import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client/client.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(
    public clientService: ClientService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ClientComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.clientService.form.reset();
    this.clientService.initializeFormGroup();
  }

  onSubmit(){
    if(this.clientService.form.valid){
      if(this.clientService.form.get('id').value === null){
        this.clientService.add(this.clientService.form.value).subscribe(
          (res) => {
            this.clientService.form.reset();
            this.clientService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.clientService.update(this.clientService.form.value , this.clientService.form.get('id').value)
          .subscribe(
            (res) => {
              this.clientService.form.reset();
              this.clientService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.clientService.form.reset();
    this.clientService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
