import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  //aqui tambien inyectamos para usar el json
  constructor( public productosServices: ProductosService) { }

  ngOnInit(): void {
  }

}
