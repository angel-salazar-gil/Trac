import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'inicio',
		loadChildren: () => import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule)
	},
	{
		path: 'contacto',
		loadChildren: () => import('./pages/contacto/contacto.module').then((m) => m.ContactoPageModule)
	},
	{
		path: 'reportes',
		loadChildren: () => import('./pages/reporte/reporte.module').then((m) => m.ReportePageModule)
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
