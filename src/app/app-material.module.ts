import { NgModule } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/Toolbar';
import {  MatButtonModule } from '@angular/material/button';


const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule { }