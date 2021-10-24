import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../Class/Manager';
import { GlobelAPIService } from './globel-api.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerAPIService  extends GlobelAPIService<Manager> {

  constructor(http : HttpClient) { 
    super("http://localhost:3000/Managers",http)
   }
}
