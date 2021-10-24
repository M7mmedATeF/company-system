import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from 'src/app/Shared/apis/employee-api.service';
import { ManagerAPIService } from 'src/app/Shared/apis/manager-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allData: any[];
  constructor(private empAPI:EmployeeAPIService,private manAPI:ManagerAPIService) {
    empAPI.get().subscribe((data: any) => {
      this.allData = data
    })
    manAPI.get().subscribe((data:any) => {
      data.forEach(element => {
        this.allData.push(element)
      });
    })
  }

  ngOnInit(): void {
  }

}
