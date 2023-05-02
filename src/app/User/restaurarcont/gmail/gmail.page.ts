import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.page.html',
  styleUrls: ['./gmail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GmailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
