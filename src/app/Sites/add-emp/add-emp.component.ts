import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeAPIService } from 'src/app/Shared/apis/employee-api.service';
import { Employee } from 'src/app/Shared/Class/Employee';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent implements OnInit {

  obj = new Employee;
  constructor(private api:EmployeeAPIService, private router : Router) {}

  ngOnInit(): void {
  }

  add(){
    this.api.post(this.obj).subscribe(data=>{});
    this.router.navigateByUrl("Employee")
  }

}
