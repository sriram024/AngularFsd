import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorAdminComponent } from './add-doctor-admin/add-doctor-admin.component';
import { AddEmployeeAdminComponent } from './add-employee-admin/add-employee-admin.component';
import { AddFinanceAdminComponent } from './add-finance-admin/add-finance-admin.component';
import { DeviceComponent } from './device/device.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { UpdateDoctorAdminComponent } from './update-doctor-admin/update-doctor-admin.component';
import { UpdateEmployeeAdminComponent } from './update-employee-admin/update-employee-admin.component';
import { UpdateFinanceAdminComponent } from './update-finance-admin/update-finance-admin.component';
import { ViewDeleteDoctorAdminComponent } from './view-delete-doctor-admin/view-delete-doctor-admin.component';
import { ViewDeleteEmployeeAdminComponent } from './view-delete-employee-admin/view-delete-employee-admin.component';
import { ViewDeleteFinanceAdminComponent } from './view-delete-finance-admin/view-delete-finance-admin.component';


const routes: Routes = [
  { path: 'add-doc', component: AddDoctorAdminComponent },
  { path: 'add-emp', component: AddEmployeeAdminComponent },
  { path: 'add-fin', component: AddFinanceAdminComponent},
  { path: 'dev', component: DeviceComponent },
  { path: 'login-admin', component: LoginComponent },
  { path: 'req', component: RequestComponent },
  { path: 'doc/:id', component: UpdateDoctorAdminComponent },
  { path: 'emp/:id', component: UpdateEmployeeAdminComponent},
  { path: 'fin/:id', component: UpdateFinanceAdminComponent },
  { path: 'view-doc', component: ViewDeleteDoctorAdminComponent},
  { path: 'view-emp', component: ViewDeleteEmployeeAdminComponent},
  { path: 'view-fin', component: ViewDeleteFinanceAdminComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
