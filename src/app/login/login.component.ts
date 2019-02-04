import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'app/login.service';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from '../Utilisateur';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html',
  providers:[LoginService],
})
export class LoginComponent implements OnInit{
  @ViewChild('f') loginForm: NgForm; 
  login:String;
  user:any;
   users: boolean = false;
   retour: any;
    utilisateur:Utilisateur;
    username:string;
    password:string;

  constructor(private propService:LoginService, public router : Router) { }
  ngOnInit()
   {
    
   }
   onclick(){
    this.auth();

   }
 
auth()
  {
  this.propService.Login(this.username,this.password).subscribe(

  (rst) =>{
    this.retour=rst
    if (rst != null)
    {
      this.router.navigate(['/test']);
    }
    else{
      console.log("echeec");
    }
   

    console.log(this.retour);
  
  
  },
  (err) => {
    alert('Email ou mot de passe incorrect');
    }); 

  }
 



  }
