import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../Utilisateur';
import { Token } from 'app/login/Token';
import 'rxjs/add/observable/of';
import { CollapseModule, ModalDirective, TypeaheadMatch } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  providers:[LoginService]
})

export class FullLayoutComponent implements OnInit {
username:string;
password:string;
currentemail:Token;
user:Utilisateur;
layoutAdmin:Boolean=false;
layoutClient:Boolean=false;
Photo:String;
parametresCpte:Boolean=false;

  constructor(private propService:LoginService, public router : Router) { }
 
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
   $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  
  
  ngOnInit(): void {
    //location.reload();


    this.authentif();
    this.parametresCpte=false;
  }


  authentif()
  {
    this.username= localStorage.getItem('user');
    //this.currentemail=helper.decodeToken(token);
    //console.log(u);
    this.getCurrentUser(); 
}
Deconnecter()
{
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  this.user=null;
  //window.sessionStorage.removeItem("token");
  //window.sessionStorage.removeItem("user");
    //window.sessionStorage.clear();
  this.router.navigate(['/pages/login']);
  
}
parametreCpte(){
  this.router.navigateByUrl('/test/ModifierCompte');

}
getCurrentUser()
  {
   this.propService.getUser(this.username).subscribe(
   
    user => {
      this.user = user;
      console.log(this.user);
      if (this.user.profil=='admin'){
        this.layoutAdmin=true;
        this.layoutClient=false;
        }
        else if(this.user.profil=='Visiteur'){
          this.layoutAdmin=false;
          this.layoutClient=true;
        }
    },
   
    err =>{
      console.log(err);
    }
   );
  }

  
  
}
