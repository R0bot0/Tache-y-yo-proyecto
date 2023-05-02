import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';
import {FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  formularioLogin: FormGroup | undefined;
  username: string | undefined;
  password: string | undefined;
  constructor(public fb: FormBuilder) { 

    this.formularioLogin=this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
    
  }
  myFunction() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
