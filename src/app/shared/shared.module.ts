import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from "@angular/router";
import { CustomMaterialModule } from '../custom-material/custom-material.module';

import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    CounterComponent
  ],
  exports: [
    HeaderComponent,
    CounterComponent
  ],
})
export class SharedModule { }
