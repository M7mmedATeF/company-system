import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from 'src/app/Shared/apis/employee-api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:any;

  constructor(private api:EmployeeAPIService) {
    api.get().subscribe(data=>{
      this.employees = data;
    })
  }

  ngOnInit(): void {
  }

  delete(id){
    this.api.delete(id).subscribe(data=>{})
    location.reload();
  }

}
