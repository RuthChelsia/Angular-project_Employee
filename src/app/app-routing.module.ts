import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmboxComponent } from './add-embox/add-embox.component';
import { DisplayEmBoxDetailsComponent } from './display-em-box-details/display-em-box-details.component';
import { DisplayEmBoxComponent } from './display-em-box/display-em-box.component';
import { EmboxComponent } from './embox/embox.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: "AddEmBox",
      component: AddEmboxComponent,
    

  },

  {
      path:"EmBox",
      component:EmboxComponent,


  },

  {
    path:"EmployeeDetails",
    component:EmpDetailsComponent,
  },
  {
    path:"home",
    component:HomeComponent,

  },
  {
    path:"embox",
    component:DisplayEmBoxComponent,

  },
  {
    path:"emboxDetails",
    component:DisplayEmBoxDetailsComponent,

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
