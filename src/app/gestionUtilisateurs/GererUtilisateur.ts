import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import { UtilisateursService } from 'app/utilisateurs.service';
import { Utilisateur } from '../Utilisateur';
import { ModalDirective } from 'ngx-bootstrap';
import { Authority } from '../Authority';
import { ToastsManager } from 'ng2-toastr';

@Component({
  templateUrl: 'GererUtilisateur.html',
  providers:[UtilisateursService],

})

export class GererUtilisateur implements OnInit{


  constructor(private usersService:UtilisateursService,public toast: ToastsManager,private vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(vcr);

    this.showHide = true;
   }
  users:Utilisateur[];
  delete:any;
  update:any;
  showHide: boolean;
  utilisateur :Utilisateur;
  username:String;
    password:String;
    nom:String;
    photo:String;
    prenom:String;
    email:String;
    telephone:String;
    profil:String;
    authority:Authority;
  AfficherUtilisateur()
  {
   this.usersService.AfficherUtilisateurs().subscribe(
    data => {
      this.users = data;
      console.log(this.users[1]);
    },
    err =>{
      console.log(err);
    }
   );
  }
  ngOnInit()
   {
  
    this.AfficherUtilisateur();
  }
  DeleteUser()
  {
this.usersService.DeleteUtilisateurs(this.delete.id).subscribe(rst => console.log(rst)) 
this.users.splice(this.users.indexOf(this.delete),1);
this.toast.success('Succés', 'Profil supprimé!');

  }
  @ViewChild('autoShownModalDelete') autoShownModalDelete: ModalDirective;
  isModalShownDelete: boolean = false;
  showModalDelete(user:any)
  {
    this.delete=user;
    this.isModalShownDelete = true;
    //console.log(this.delete);
  }
  onHiddenDelete(): void {
    this.isModalShownDelete = false;
  }
  hideModalDelete(): void {
    this.autoShownModalDelete.hide();
  }
  showModalUpdate(user:any)
  {
    this.update=user;
    this.isModalShownUpdate = true;
    console.log(this.update);
  }
  @ViewChild('autoShownModalUpdate') autoShownModalUpdate: ModalDirective;
  isModalShownUpdate: boolean = false

  UpdateUser()
  {
    console.log(this.update);
  
 this.usersService.AjouterUtilisateur(this.update).subscribe(rst => console.log(rst));
    this.hideModalUpdate();
    this.toast.success('Succés', 'Profil modifié!');

  }
  hideModalUpdate(): void {
    this.autoShownModalUpdate.hide();
  }
  onHiddenUpdate(): void {
    this.isModalShownUpdate = false;
  }
  @ViewChild('autoShownModalAjouter') autoShownModalAjouter: ModalDirective;
  isModalShownAjouter: boolean = false;
  showModalAjouter(): void {
    this.isModalShownAjouter = true;
  }
  hideModalAjouter(): void {
    this.autoShownModalAjouter.hide();
  }
  onHiddenAjouter(): void {
    this.isModalShownAjouter = false;
  }
AjouterUtilisateur()
  {
    try
{
  this.utilisateur = new Utilisateur(this.username , this.password,this.nom,this.photo,this.prenom,this.email,this.telephone,this.profil,this.authority);
  this.usersService.AjouterUtilisateur(this.utilisateur).subscribe(rst => console.log(rst));
  console.log(this.utilisateur);

  this.users.push(this.utilisateur);
    this.hideModalAjouter();
    this.toast.success('Succés', 'Profil ajouté!');
    console.log(this.utilisateur);

  }
  catch(Error)
  {
    this.toast.error("Echec : vérifier votre connexion !!!");
  } 
  }

 
}

