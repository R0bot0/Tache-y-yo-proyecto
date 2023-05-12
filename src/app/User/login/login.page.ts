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
  id!: string;
  password!: string;
  constructor(private http: HttpClient, private router: Router ,private navCtrl: NavController) {}

  ngOnInit() {
  }
  
  login() {
    const body = {
      id: this.id,
      password: this.password
    };
    
    console.log(body)
    // this.http.post(`${environment.apiUrl}/auth/login`, body).subscribe((response) => {
    //   if (response) {
    //     // User exists, navigate to home page
    //     this.router.navigate(['folder/Documentos de interes']);
    //   } else {
    //     // Show error message
    //     console.log("error del servidor");
    //   }
    // });
  }

}