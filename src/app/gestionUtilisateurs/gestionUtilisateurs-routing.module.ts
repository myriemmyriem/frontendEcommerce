import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsComponent } from './modals.component';
import { ModifierCompte } from './ModifierCompte';
import { GererUtilisateur } from './GererUtilisateur';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'test'
    },
    children: [
      
     
     
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'ModifierCompte',
        component: ModifierCompte,
        data: {
          title: 'ModifierCompte'
        }
      },
      
     
      {
        path: 'GererUtilisateur',
        component: GererUtilisateur,
        data: {
          title: 'GererUtilisateur'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUtilisateursRoutingModule {}
