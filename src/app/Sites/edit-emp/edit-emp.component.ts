import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeAPIService } from 'src/app/Shared/apis/employee-api.service';
import { Employee } from 'src/app/Shared/Class/Employee';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  obj = new Employee;
  constructor(private api:EmployeeAPIService, private router : Router, private activated:ActivatedRoute) {
    api.getById(activated.snapshot.paramMap.get('id')).subscribe(data=>{
      this.obj = data;
    })
  }

  ngOnInit(): void {
  }

  update(id){
    this.api.update(id,this.obj).subscribe(data=>{});
    this.router.navigateByUrl("Employee")
  }

}
