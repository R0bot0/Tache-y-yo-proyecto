import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class MenuComponent  implements OnInit {

  public appPages = [
    { title: 'Documentos de interes', url: '/folder/Documentos de interes', icon: 'document-text' },
    { title: 'Mis escenarios', url: '/folder/Mis escenarios', icon: 'images' },
    { title: 'Ayuda Mutua', url: '/folder/Ayuda Mutua', icon: 'medkit' },
    { title: 'Listado de sustancias', url: '/folder/Listado de sustancias', icon: 'nuclear' },
    { title: 'Mapa de emergencias', url: '/folder/Mapa de emergencias', icon: 'alert-circle' },
    { title: 'Gestión de recursos', url: '/folder/Gestión de recursos', icon: 'cube' },
    { title: 'Contacto', url: '/folder/Contacto', icon: 'people-circle' },
  ];

  constructor(public menuCtrl: MenuController) { }

  hidemenu(){
    this.menuCtrl.toggle('menusimet')
  }

  ngOnInit() {}

}
