import { Authority } from "app/Authority";

export class Utilisateur {

   
    username:String;
    password:String;
    nom:String;
    photo:String;
    prenom:String;
    email:String;
    telephone:String;
    profil:String;
    authority:Authority;

    constructor(username :String, password:String,nom:String,photo:String, prenom:String,email:String,telephone:String,profil:String,authority:Authority)
{
	this.username=username ;
    
    this.password=password;
    this.nom=nom;
    this.photo=photo;
    this.prenom=prenom;
    this.email=email;
    this.telephone=telephone;
    this.profil=profil;
    this.authority=authority;

}


}