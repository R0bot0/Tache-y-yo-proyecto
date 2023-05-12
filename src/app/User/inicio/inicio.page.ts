import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {
  currentday: String = new Date().toLocaleString('es-ES', {weekday: 'long'});
  currentDate: String = new Date().toLocaleString('es-ES', {day: 'numeric', month: 'long'});
  currentyear: String = new Date().toLocaleString('es-ES', {year: 'numeric' });
  // AQUI DECLARAS EL STRING
  //imageData: string;
  constructor() { }

  ngOnInit() {
    //AQUI DECLARAS LA FUNCION QUE SACA EL SRC PARA QUE MUESTRE LA IMAGEN
    //this.getImageData();
  }
  //ESTA ES LA FUNCION COMO TAL, LA SAQUE DE POR AHI, SI ALGO CAMBIALA O USA OTRO METODO SI TE ES MAS FACIL. ME AVISAS CUANDO TERMINES PARA VER SI QUEDO BN
  /*getImageData() {
    this.myService.getImageData().subscribe(
      data => {
        this.imageData = 'data:image/jpeg;base64,' + data.imageData;
      },
      error => {
        console.log(error);
      }
    );
  }*/
}
