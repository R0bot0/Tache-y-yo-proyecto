import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nuevacont',
  templateUrl: './nuevacont.page.html',
  styleUrls: ['./nuevacont.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NuevacontPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
