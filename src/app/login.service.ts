import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Headers } from '@angular/http';
import { Utilisateur } from './Utilisateur';
@Injectable()
export class LoginService {
token: String;
  constructor(private http:Http) { }

  Login(username: string,password:string): Observable<any[]> 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    
    let options = new RequestOptions({ headers: headers });
 return this.http.post("http://localhost:2018/auth/login", JSON.stringify({username: username, password: password} || null ),options)
 .map((response: Response) => {
  if ((response.status === 200) || (response.status === 201)) {
  let token = response.json().access_token;
  this.token = token;


  localStorage.setItem('token', token);
  localStorage.setItem('user', username);
  return true;
  }
  
  }) 
 .catch((error:any) => Observable.throw('Server error'));
  }
  getUser(username:String): Observable<any> 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);


    console.log(username);
    let options = new RequestOptions({ headers: headers });
    return this.http.get("http://localhost:2018/api/user/getuserbyusername?username="+username,options)
    .map((response:Response) => response.json());
  }
  

  

}
