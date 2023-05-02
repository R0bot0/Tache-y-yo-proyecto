import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Documentos de interes',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadChildren: () => import('./User/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./User/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'nuevacont',
    loadComponent: () => import('./User/restaurarcont/nuevacont/nuevacont.page').then( m => m.NuevacontPage)
  },
  {
    path: 'codigo',
    loadComponent: () => import('./User/restaurarcont/codigo/codigo.page').then( m => m.CodigoPage)
  },
  {
    path: 'metodos',
    loadComponent: () => import('./User/restaurarcont/metodos/metodos.page').then( m => m.MetodosPage)
  },
  {
    path: 'gmail',
    loadComponent: () => import('./User/restaurarcont/gmail/gmail.page').then( m => m.GmailPage)
  },
  {
    path: 'sms',
    loadComponent: () => import('./User/restaurarcont/sms/sms.page').then( m => m.SmsPage)
  },

];
