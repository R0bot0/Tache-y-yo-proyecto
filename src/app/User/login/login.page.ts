import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id!: string;
  password!: string;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }
  Login() {
    // Handle login logic here
    console.log('Username:', this.id);
    console.log('Password:', this.password);
    var ver= this.id==='admin';
    var vir= this.password==='password';
    
    // Example login logic
    if (this.id == 'admin' && this.password == 'password') {
      console.log(ver, vir);
      this.navCtrl.navigateForward('folder');
    }
  }

}
