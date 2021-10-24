import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerAPIService } from 'src/app/Shared/apis/manager-api.service';

@Component({
  selector: 'app-preview-manager',
  templateUrl: './preview-manager.component.html',
  styleUrls: ['./preview-manager.component.css']
})
export class PreviewManagerComponent implements OnInit {

  obj;

  constructor(private api:ManagerAPIService,private activated:ActivatedRoute) {
    api.getById(activated.snapshot.paramMap.get('id')).subscribe(data=>{
      this.obj = data;
    })
  }
  ngOnInit(): void {
  }

}
