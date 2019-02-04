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
;

@Injectable()
export class UtilisateursService {

  constructor(private http:Http) { }
  AfficherUtilisateurs(): Observable<any[]> 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get("http://localhost:2018/api/user/getalluser",options)
    .map((response:Response) => response.json())
    
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  DeleteUtilisateurs(id:any): Observable<any[]> 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete("http://localhost:2018/api/user/deleteUser/"+id,options)
    .map((response:Response) => response.json())
    
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  AjouterUtilisateur(f:Utilisateur): Observable<any[]> 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);


    
    let options = new RequestOptions({ headers: headers });
    let u= JSON.stringify(f);
    console.log(u);
 return this.http.post("http://localhost:2018/api/user/adduser", f || null,options)
    .map(response => response.json())
    .catch((error:any) => Observable.throw('Server error'));
  }

 ModifierUtilisateur(f:Utilisateur): Observable<any[]> 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);


    
    let options = new RequestOptions({ headers: headers });
    let u= JSON.stringify(f);
    console.log(u);
 return this.http.post("http://localhost:2018/auth/update", f || null,options)
    .map(response => response.json())
    .catch((error:any) => Observable.throw('Server error'));
  }
}
