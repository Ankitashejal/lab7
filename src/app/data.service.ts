import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient : HttpClient) { 

  }
  getdata(){
    return this.httpclient.get("https://reqres.in/api/users")
  }
}
