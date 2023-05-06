import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-restaurarcont',
  templateUrl: './restaurarcont.page.html',
  styleUrls: ['./restaurarcont.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RestaurarcontPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
