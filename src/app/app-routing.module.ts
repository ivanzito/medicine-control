import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/component/login.component';
import { MedicineComponent } from './medicine/component/medicine.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acompanhamento', component: MedicineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
