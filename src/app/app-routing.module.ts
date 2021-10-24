import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddManagersComponent } from './Managers/add-managers/add-managers.component';
import { EditManagersComponent } from './Managers/edit-managers/edit-managers.component';
import { ManagersComponent } from './Managers/managers/managers.component';
import { PreviewManagerComponent } from './Managers/preview-manager/preview-manager.component';
import { AddEmpComponent } from './Sites/add-emp/add-emp.component';
import { EditEmpComponent } from './Sites/edit-emp/edit-emp.component';
import { EmployeeComponent } from './Sites/employee/employee.component';
import { HomeComponent } from './Sites/home/home.component';
import { PreviewEmpComponent } from './Sites/preview-emp/preview-emp.component';


const routes: Routes = [
  { path : "",component:HomeComponent},
  { path : "home",component:HomeComponent},
  { path : "Home",component:HomeComponent},
  { path : "Employee",component:EmployeeComponent},
  { path : "employee",component:EmployeeComponent},
  { path : "Add-Employee",component:AddEmpComponent},
  { path : "add-employee",component:AddEmpComponent},
  { path : "Preview-Employee/:id",component:PreviewEmpComponent},
  { path : "preview-employee/:id",component:PreviewEmpComponent},
  { path : "edit-employee/:id",component:EditEmpComponent},
  { path : "Edit-Employee/:id",component:EditEmpComponent},
  // -------------------------------- Managers --------------------------------
  { path : "Managers",component:ManagersComponent},
  { path : "managers",component:ManagersComponent},
  { path : "Add-Manager",component:AddManagersComponent},
  { path : "add-manager",component:AddManagersComponent},
  { path : "Edit-Manager/:id",component:EditManagersComponent},
  { path : "edit-manager/:id",component:EditManagersComponent},
  { path : "Preview-Manager/:id",component:PreviewManagerComponent},
  { path : "preview-manager/:id",component:PreviewManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
