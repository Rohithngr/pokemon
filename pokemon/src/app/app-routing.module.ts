import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
      path:'pokemon', loadChildren:()=> import('./view/view.module').then(m => m.ViewModule)
    },
    {
      path:'', redirectTo:'pokemon', pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
