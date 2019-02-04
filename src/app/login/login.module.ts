import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [ LoginRoutingModule,HttpModule,FormsModule,ReactiveFormsModule ],
  declarations: [
    LoginComponent
    
    
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
