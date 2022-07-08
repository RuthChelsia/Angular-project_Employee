import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmboxComponent } from './add-embox/add-embox.component';
import { EmboxComponent } from './embox/embox.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: "addEmBox",
      component: AddEmboxComponent,
    

  },

  

  {
    path:"employeeDetails/:id",
    component:EmpDetailsComponent,
  },
  {
    path:"home",
    component:HomeComponent,

  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
