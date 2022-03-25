import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './acount/account.service';
import { RelationService } from './relation/relation.service';
import { DialogService } from '../shared/dialog.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AccountService, 
    RelationService,
    DialogService,
    
  ]
})
export class ServicesModule { }
