import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { 
constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vRef);
  } 
}