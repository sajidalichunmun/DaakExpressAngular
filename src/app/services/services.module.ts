import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './acount/account.service';
import { RelationService } from './relation/relation.service';
import { DialogService } from '../shared/dialog.service';
import { MajorService } from './major/major.service';
import { ClientService } from './client/client.service';
import { CountryService } from './country/country.service';
import { StateService } from './state/state.service';
import { CityService } from './city/city.service';
import { ReasonService } from './reason/reason.service';
import { FranchiseeService } from './franchisee/franchisee.service';
import { PackettypeService } from './packettype/packettype.service';
import { SubcityService } from './subcity/subcity.service';



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
    MajorService,
    ClientService,
    CountryService,
    StateService,
    CityService,
    SubcityService,
    ReasonService,
    FranchiseeService,
    PackettypeService
  ]
})
export class ServicesModule { }
