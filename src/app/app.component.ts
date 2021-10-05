import { Component } from '@angular/core';
import { InfoPaginaService } from './servicios/info-pagina.service';
import { ProductosService } from './servicios/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //injeccion del json infoPaginaservice, aqui por que son globales
  constructor( public _infoPagina: InfoPaginaService,
                public _infoProductosServices: ProductosService
                ){}
}
