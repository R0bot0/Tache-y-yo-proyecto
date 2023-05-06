import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email!: string;
  password!: string;
  constructor(private http: HttpClient, private router: Router ,private navCtrl: NavController) {}

  ngOnInit() {
  }
  
  login() {
    const body = {
      email: this.email,
      password: this.password
    };
    
    this.http.post(`${environment.apiUrl}/auth/login`, body).subscribe((response) => {
      if (response) {
        // User exists, navigate to home page
        this.router.navigate(['folder/Documentos de interes']);
      } else {
        // Show error message
        console.log("error del servidor");
      }
    });
  }

}
