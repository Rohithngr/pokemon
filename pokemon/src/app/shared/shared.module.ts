import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from '../pipe/search-pipe/search-pipe.pipe';
import {NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [SearchPipePipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule ,
    NgChartsModule
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule ,
    SearchPipePipe,
    NgChartsModule
  ]
})
export class SharedModule { }
