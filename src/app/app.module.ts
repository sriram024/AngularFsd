import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorAdminComponent } from './add-doctor-admin/add-doctor-admin.component';
import { ViewDeleteDoctorAdminComponent } from './view-delete-doctor-admin/view-delete-doctor-admin.component';
import { UpdateDoctorAdminComponent } from './update-doctor-admin/update-doctor-admin.component';
import { AddEmployeeAdminComponent } from './add-employee-admin/add-employee-admin.component';
import { ViewDeleteEmployeeAdminComponent } from './view-delete-employee-admin/view-delete-employee-admin.component';
import { UpdateEmployeeAdminComponent } from './update-employee-admin/update-employee-admin.component';
import { AddFinanceAdminComponent } from './add-finance-admin/add-finance-admin.component';
import { ViewDeleteFinanceAdminComponent } from './view-delete-finance-admin/view-delete-finance-admin.component';
import { UpdateFinanceAdminComponent } from './update-finance-admin/update-finance-admin.component';
import { RequestComponent } from './request/request.component';
import { DeviceComponent } from './device/device.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorAdminComponent,
    ViewDeleteDoctorAdminComponent,
    UpdateDoctorAdminComponent,
    AddEmployeeAdminComponent,
    ViewDeleteEmployeeAdminComponent,
    UpdateEmployeeAdminComponent,
    AddFinanceAdminComponent,
    ViewDeleteFinanceAdminComponent,
    UpdateFinanceAdminComponent,
    RequestComponent,
    DeviceComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
