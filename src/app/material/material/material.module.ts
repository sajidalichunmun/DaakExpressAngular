import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports:[
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule
  ],
  
})
export class MaterialModule { }
