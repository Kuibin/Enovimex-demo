import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              public productosServices: ProductosService
              ) { }

  ngOnInit(): void {

    this.router.params.subscribe( params =>{
      //la palabra en el arreglo es como se puso en el component de rutas
      //console.log(params['txtBuscar']);
      this.productosServices.buscarProducto(params['txtBuscar']);

    });

  }

}
