import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'folder',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadChildren: () => import('./User/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'restaurarcont',
    loadComponent: () => import('./User/Restaurar/restaurarcont/restaurarcont.page').then( m => m.RestaurarcontPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./User/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'cambiarcont',
    loadComponent: () => import('./User/cambiarcont/cambiarcont.page').then( m => m.CambiarcontPage)
  },

];
