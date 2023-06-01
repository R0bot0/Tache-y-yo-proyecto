import { Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MenuComponent} from 'src/app/menu/menu.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule, MenuComponent],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public options!: string;
  private activatedRoute = inject(ActivatedRoute);
  currentday: String = new Date().toLocaleString('es-ES', {weekday: 'long'});
  currentDate: String = new Date().toLocaleString('es-ES', {day: 'numeric', month: 'long'});
  currentyear: String = new Date().toLocaleString('es-ES', {year: 'numeric' });
  constructor() {}
  search(event: any) {
    // Add search functionality here
  }
  setOption(option: string) {
    this.options = option;
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.setOption(this.folder);
  }
}
