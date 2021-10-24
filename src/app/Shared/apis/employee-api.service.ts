import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Class/Employee';
import { GlobelAPIService } from './globel-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIService extends GlobelAPIService<Employee> {
  
  constructor(http : HttpClient) { 
    super("http://localhost:3000/employee",http)
   }
}
