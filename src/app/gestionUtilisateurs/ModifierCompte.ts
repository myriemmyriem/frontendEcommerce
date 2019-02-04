import { Component, ViewContainerRef } from '@angular/core';
import { Utilisateur } from 'app/Utilisateur';
import { Token } from 'app/login/Token';
import { LoginService } from 'app/login.service';
import { Router } from '@angular/router';
import { Authority } from 'app/Authority';
import { UtilisateursService } from 'app/utilisateurs.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  templateUrl: 'ModifierCompte.html',
  providers:[LoginService,UtilisateursService]

})
export class ModifierCompte {
  username:string;
  password:string;
  currentemail:Token;
  user:Utilisateur;
  layoutAdminFonct:Boolean=false;
  layoutAdminTech:Boolean=false;
  Photo:String;
  parametresCpte:Boolean=false;
  nom:String;
  photo:String;
  prenom:String;
  email:String;
  telephone:String;
  profil:String;
  authority:Authority;
  constructor(private propService:LoginService, public router : Router,private usersService:UtilisateursService,public toast: ToastsManager,private vcr: ViewContainerRef) { 
    this.toast.setRootViewContainerRef(vcr);

  }
  ngOnInit(): void {
    //location.reload();


    this.parametreCpte();
    this.user= new Utilisateur(null,null,null,null,null,null,null,null,null);
  }


  parametreCpte()
  {
    this.username= localStorage.getItem('user');
    //this.currentemail=helper.decodeToken(token);
    //console.log(u);
    this.getUser(); 
}


getUser()
  {
   this.propService.getUser(this.username).subscribe(
   
    user => {
      this.user = user;
      console.log(this.user);
      console.log(this.user.nom);

    },
   
    err =>{
      console.log(err);
    }
   );
  }
  ModifierUtilisateur()
  {
    try

{
  this.usersService.ModifierUtilisateur(this.user).subscribe(rst => console.log(rst));
  console.log(this.user);

    this.toast.success('Succés', 'Profil modifié!');
    console.log(this.user);

  }
  catch(Error)
  {
    this.toast.error("Echec : vérifier votre connexion !!!");
  } 
  }
  
  
}