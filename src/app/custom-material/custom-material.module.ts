import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdGridListModule,
  MdCardModule,
  MdMenuModule,
  MdIconModule,
  MdInputModule,
  MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdGridListModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdSnackBarModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdGridListModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdSnackBarModule
  ]
})
export class CustomMaterialModule { }
