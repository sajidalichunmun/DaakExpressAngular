import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PackettypeService } from 'src/app/services/packettype/packettype.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-packettype',
  templateUrl: './packettype.component.html',
  styleUrls: ['./packettype.component.css']
})
export class PackettypeComponent implements OnInit {

  
  constructor(
    public packetService: PackettypeService,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<PackettypeComponent>,
  ) {

  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    if (this.packetService.packetType.id > 0) {
      this.packetService.update(this.packetService.packetType).subscribe({
        next: (res: any) => {
          this.notificationService.success_meesage(':: Successfully Updated');
          this.onClose("update");
        },
        error: (err: any) => {
          this.notificationService.error_meesage(err['message']);
        }
      });
    } else {
      this.packetService.add(this.packetService.packetType).subscribe({
        next: (res: any) => {

          this.notificationService.success_meesage(':: Successfully Saved');
          this.onClose("save");
        },
        error: (err: any) => {
          console.log(err);
          
          this.notificationService.error_meesage(err.error.message);
        }
      });
    }
  }

  onClose(val: string) {
    this.packetService.form.reset();
    this.packetService.packetType = {
      id: 0,
      name: null,
      packettypeshortcode:'',
      createdby: '',
      createdon: null,
      updatedby: '',
      updatedon: null,
      isactive: ''
    };

    this.dialogRef.close(val);
  }
}
