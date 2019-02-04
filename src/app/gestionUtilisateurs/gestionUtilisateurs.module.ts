
import {CommonModule, DatePipe} from '@angular/common';
// Forms Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ModifierCompte } from './ModifierCompte';
// Modal Component
import { ModalsComponent } from './modals.component';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GererUtilisateur } from './GererUtilisateur';

// Components Routing
import { GestionUtilisateursRoutingModule } from './gestionUtilisateurs-routing.module';
import { NgModule} from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ChartsModule } from "ng2-charts/ng2-charts";
import {ToastModule} from 'ng2-toastr/ng2-toastr'; 
import { FilterPipe } from './FilterPipe';

@NgModule({

  imports: [
    GestionUtilisateursRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
      FormsModule,
     CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    ChartsModule,
    FormsModule,
    TabsModule,
    ToastModule.forRoot(),


    
  ],
  
  declarations: [
    ModalsComponent,
    ModifierCompte,
    GererUtilisateur,
    FilterPipe
  ],
  exports: [
    
    FilterPipe
],
})
export class GestionUtilisateursModule { }
