import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PacketstatusService } from 'src/app/services/packetstatus/packetstatus.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-packet-status',
  templateUrl: './packet-status.component.html',
  styleUrls: ['./packet-status.component.css']
})
export class PacketStatusComponent implements OnInit {

  constructor(
    public packetStatusService: PacketstatusService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<PacketStatusComponent>) { }

  ngOnInit(): void {
  }

  
  onClear() {
    this.packetStatusService.form.reset();
    this.packetStatusService.initializeFormGroup();
  }

  onSubmit(){
    if(this.packetStatusService.form.valid){
      if(this.packetStatusService.form.get('id').value === null){
        this.packetStatusService.add(this.packetStatusService.form.value).subscribe(
          (res) => {
            this.packetStatusService.form.reset();
            this.packetStatusService.initializeFormGroup();
            this.notificationService.success_meesage(':: Successfully Saved');
            this.onClose(res);
          }
        )
        
      }else{
        this.packetStatusService.update(this.packetStatusService.form.value , this.packetStatusService.form.get('id').value)
          .subscribe(
            (res) => {
              this.packetStatusService.form.reset();
              this.packetStatusService.initializeFormGroup();
              this.notificationService.success_meesage(':: Successfully Updated');
              this.onClose(res);
            }
          )
      }
    }
  }

  onClose(val) {
    this.packetStatusService.form.reset();
    this.packetStatusService.initializeFormGroup();
    this.dialogRef.close(val);
  }
}
