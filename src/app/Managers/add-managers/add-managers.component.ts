import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerAPIService } from 'src/app/Shared/apis/manager-api.service';
import { Manager } from 'src/app/Shared/Class/Manager';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.component.html',
  styleUrls: ['./add-managers.component.css']
})
export class AddManagersComponent{

  obj = new Manager;
  constructor(private api:ManagerAPIService, private router : Router) {}

  ngOnInit(): void {
  }

  add(){
    this.api.post(this.obj).subscribe(data=>{});
    this.router.navigateByUrl("Managers")
  }

}
