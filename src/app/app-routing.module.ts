import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';

/*
hecho manualmente:
rutas de componentes
*/
const app_routes: Routes = [
  //cuando no hay componente (localhost:4200), redirige
  {path:'home',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'buscar/:txtBuscar',component:BuscarComponent},
  //si no es ninguna de las rutas arriba, redirige al q asignemos
  {path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports:[
    //{ useHash:true } atributo para indicar q use hash
      RouterModule.forRoot(app_routes, { useHash:true })
  ],
  exports:[//no olvidar exportar para q pueda ser llamado
    RouterModule
  ]

})
export class AppRoutingModulo{

}
