import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-restaurarcont',
  templateUrl: './restaurarcont.page.html',
  styleUrls: ['./restaurarcont.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive ]
})
export class RestaurarcontPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mandarnotif() {
    const body = {
    };
  }

}
