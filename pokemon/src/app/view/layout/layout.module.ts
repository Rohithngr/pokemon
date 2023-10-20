import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
