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
  currentDate: String = new Date().toLocaleString('es-ES', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  constructor() { }

  ngOnInit() {
  }

}
