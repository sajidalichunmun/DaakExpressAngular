import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackettypeComponent } from './packettypes/packettype/packettype.component';
import { PackettypesComponent } from './packettypes/packettypes.component';
import { RelationComponent } from './relations/relation/relation.component';
import { RelationsComponent } from './relations/relations.component';
import { PackettypelistComponent } from './packettypes/packettypelist/packettypelist.component';
import { RelationListComponent } from './relations/relation-list/relation-list.component';
import { CitiesComponent } from './cities/cities.component';
import { CityListComponent } from './cities/city-list/city-list.component';
import { CityComponent } from './cities/city/city.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryComponent } from './countries/country/country.component';
import { FranchiseeListComponent } from './franchises/franchisee-list/franchisee-list.component';
import { FranchiseeComponent } from './franchises/franchisee/franchisee.component';
import { FranchisesComponent } from './franchises/franchises.component';
import { MajorListComponent } from './majors/major-list/major-list.component';
import { MajorComponent } from './majors/major/major.component';
import { MajorsComponent } from './majors/majors.component';
import { PacketStatusListComponent } from './packets-status/packet-status-list/packet-status-list.component';
import { PacketStatusComponent } from './packets-status/packet-status/packet-status.component';
import { PacketsStatusComponent } from './packets-status/packets-status.component';
import { ReasonListComponent } from './reasons/reason-list/reason-list.component';
import { ReasonComponent } from './reasons/reason/reason.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { StateListComponent } from './states/state-list/state-list.component';
import { StateComponent } from './states/state/state.component';
import { StatesComponent } from './states/states.component';
import { SubCitiesComponent } from './sub-cities/sub-cities.component';
import { SubCityListComponent } from './sub-cities/sub-city-list/sub-city-list.component';
import { SubCityComponent } from './sub-cities/sub-city/sub-city.component';

const routes = [
  { path: '', component: PackettypesComponent, pathMatch: 'full'},
  { path: 'packet-type', component: PackettypesComponent, pathMatch: 'full'},
  { path: 'relation', component: RelationsComponent, pathMatch: 'full'},
  { path: 'major', component: MajorsComponent, pathMatch: 'full'},
  { path: 'client', component: ClientsComponent, pathMatch: 'full'},
  { path: 'reason', component: ReasonsComponent, pathMatch: 'full'},
  { path: 'country', component: CountriesComponent, pathMatch: 'full'},
  { path: 'state', component: StatesComponent, pathMatch: 'full'},
  { path: 'city', component: CitiesComponent, pathMatch: 'full'},
  { path: 'sub-area', component: SubCitiesComponent, pathMatch: 'full'},
  { path: 'franchisee', component: FranchisesComponent, pathMatch: 'full'},
  { path: 'packet-status', component: PacketsStatusComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    PackettypesComponent,
    PackettypeComponent,
    PackettypelistComponent,
    RelationsComponent,
    RelationListComponent,
    RelationComponent,
    MajorsComponent,
    MajorComponent,
    MajorListComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    ReasonsComponent,
    ReasonComponent,
    ReasonListComponent,
    CountriesComponent,
    CountryComponent,
    CountryListComponent,
    StatesComponent,
    StateComponent,
    StateListComponent,
    CitiesComponent,
    CityComponent,
    CityListComponent,
    SubCitiesComponent,
    SubCityComponent,
    SubCityListComponent,
    PacketsStatusComponent,
    PacketStatusComponent,
    PacketStatusListComponent,
    FranchisesComponent,
    FranchiseeComponent,
    FranchiseeListComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    RouterModule
  ],
  entryComponents:[
    PackettypeComponent,
    RelationComponent,
    MajorComponent,
    ClientComponent,
    ReasonComponent,
    CountryComponent,
    CityComponent,
    StateComponent,
    SubCityComponent,
    PacketStatusComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class MastersModule { }
