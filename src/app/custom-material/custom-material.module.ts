import { NgModule } from '@angular/core';
import { 
  MdButtonModule, 
  MdCheckboxModule,
  MdToolbarModule,
  MdGridListModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdGridListModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdGridListModule,
    MdCardModule
  ]
})
export class CustomMaterialModule { }
