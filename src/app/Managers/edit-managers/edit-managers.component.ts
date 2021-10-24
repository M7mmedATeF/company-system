import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerAPIService } from 'src/app/Shared/apis/manager-api.service';
import { Manager } from 'src/app/Shared/Class/Manager';

@Component({
  selector: 'app-edit-managers',
  templateUrl: './edit-managers.component.html',
  styleUrls: ['./edit-managers.component.css']
})
export class EditManagersComponent implements OnInit {

  obj = new Manager;
  constructor(private api:ManagerAPIService, private router : Router, private activated:ActivatedRoute) {
    api.getById(activated.snapshot.paramMap.get('id')).subscribe(data=>{
      this.obj = data;
    })
  }

  ngOnInit(): void {
  }

  update(id){
    this.api.update(id,this.obj).subscribe(data=>{});
    this.router.navigateByUrl("Managers")
  }

}
