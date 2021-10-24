import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Sites/employee/employee.component';
import { NavComponent } from './Shared/nav/nav.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Sites/home/home.component'
import { FormsModule } from '@angular/forms';
import { AddEmpComponent } from './Sites/add-emp/add-emp.component';
import { PreviewEmpComponent } from './Sites/preview-emp/preview-emp.component';
import { EditEmpComponent } from './Sites/edit-emp/edit-emp.component';
import { ManagersComponent } from './Managers/managers/managers.component';
import { AddManagersComponent } from './Managers/add-managers/add-managers.component';
import { EditManagersComponent } from './Managers/edit-managers/edit-managers.component';
import { PreviewManagerComponent } from './Managers/preview-manager/preview-manager.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AddEmpComponent,
    PreviewEmpComponent,
    EditEmpComponent,
    ManagersComponent,
    AddManagersComponent,
    EditManagersComponent,
    PreviewManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
