import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { RelationsComponent } from './relations/relations.component';
import { PackettypeComponent } from './packettypes/packettype/packettype.component';
import { PackettypesComponent } from './packettypes/packettypes.component';
import { RelationComponent } from './relations/relation/relation.component';
import { RelationListComponent } from './relations/relation-list/relation-list.component';
import { MaterialModule } from '../material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackettypelistComponent } from './packettypes/packettypelist/packettypelist.component';

const routes = [
  { path: '', component: PackettypesComponent, pathMatch: 'full'},
  { path: 'packet-type', component: PackettypesComponent, pathMatch: 'full'},
  { path: 'relation', component: RelationsComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    PackettypesComponent,
    PackettypeComponent,
    PackettypelistComponent,
    RelationsComponent,
    RelationListComponent,
    RelationComponent,
    
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
    RelationComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class MastersModule { }
