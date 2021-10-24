import { Component, OnInit } from '@angular/core';
import { ManagerAPIService } from 'src/app/Shared/apis/manager-api.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent {

  managers:any;

  constructor(private api:ManagerAPIService) {
    api.get().subscribe(data=>{
      this.managers = data;
    })
  }

  ngOnInit(): void {
  }

  delete(id){
    this.api.delete(id).subscribe(data=>{})
    location.reload();
  }
}
