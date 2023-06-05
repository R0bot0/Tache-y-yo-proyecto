import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-cambiarcont',
  templateUrl: './cambiarcont.page.html',
  styleUrls: ['./cambiarcont.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule, FormsModule]
})
export class CambiarcontPage implements OnInit {
  oldpassword!: string;
  newpassword!: string;
  repeatpassword!: string;
  constructor() {}

  ngOnInit() {
  }
  
  neuvacont() {
    const body = {
      oldpassword: this.oldpassword,
      newpassword: this.newpassword,
      repeatpassword: this.repeatpassword
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
