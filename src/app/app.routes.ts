import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: './User/login/login.module',
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
    loadComponent: () => import('./User/restaurarcont/restaurarcont.page').then( m => m.RestaurarcontPage)
  },

];
