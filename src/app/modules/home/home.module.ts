import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';

@NgModule({
    imports: [ BrowserModule, CustomMaterialModule ],
    declarations: [ HomeComponent ]
})
export class HomeModule {}