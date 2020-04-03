import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    // tslint:disable-next-line: whitespace
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./pages/reporte/reporte.module').then( m => m.ReportePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'agregar-reporte',
    loadChildren: () => import('./pages/agregar-reporte/agregar-reporte.module').then( m => m.AgregarReportePageModule)
  },
  {
    path: 'editar-reporte/:id',
    loadChildren: () => import('./pages/editar-reporte/editar-reporte.module').then( m => m.EditarReportePageModule)
  },
  {
    path: 'ver-reporte/:id',
    loadChildren: () => import('./pages/ver-reporte/ver-reporte.module').then( m => m.VerReportePageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./pages/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },
  {
    path: 'iframe',
    loadChildren: () => import('./pages/iframe/iframe.module').then( m => m.IframePageModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }





];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
