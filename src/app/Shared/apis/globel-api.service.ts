import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Employee } from '../Class/Employee';

@Injectable({
  providedIn: 'root'
})
export class GlobelAPIService<T> {
  
  constructor(@Inject(String) public configURL:string,public http:HttpClient) { }

  get(){
    return this.http.get<T>(this.configURL)
  }
  
  getById(id){
    return this.http.get<T>(this.configURL + "/" + id)
  }

  post(obj:T){
    return this.http.post<T>(this.configURL,obj)
  }

  update(id:number,obj:T){
    return this.http.put<T>(this.configURL + "/" + id , obj)
  }
  
  delete(id:number){
    return this.http.delete<T>(this.configURL + "/" + id)
  }
}
