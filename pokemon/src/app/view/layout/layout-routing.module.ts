import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:'', component:LayoutComponent, children:[
      {
        path:'home', loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'', redirectTo:'home', pathMatch:'full'
      },
      {
        path:'details/:name', component:DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
