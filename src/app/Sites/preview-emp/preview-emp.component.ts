import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeAPIService } from 'src/app/Shared/apis/employee-api.service';
import { Employee } from 'src/app/Shared/Class/Employee';

@Component({
  selector: 'app-preview-emp',
  templateUrl: './preview-emp.component.html',
  styleUrls: ['./preview-emp.component.css']
})
export class PreviewEmpComponent implements OnInit {

  obj;

  constructor(private api:EmployeeAPIService,private activated:ActivatedRoute) {
    api.getById(activated.snapshot.paramMap.get('id')).subscribe(data=>{
      this.obj = data;
    })
  }

  ngOnInit(): void {
  }

}
