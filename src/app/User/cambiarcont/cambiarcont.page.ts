import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcont',
  templateUrl: './cambiarcont.page.html',
  styleUrls: ['./cambiarcont.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CambiarcontPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
