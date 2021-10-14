import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;// = {};
  /*
  Para la prodiedad no inicializada y q compile, hay que ir
  tsconfig.json - y agregar
  "angularCompilerOptions": {
    "strictPropertyInitialization": false //agregar esta propiedad
  }
  */

  id: string;
  //inyeccion para recivir parametros x URL
  constructor(private route: ActivatedRoute,
              public productoServices: ProductosService
    ) { }

  ngOnInit(): void {

    //Recivimos y leemos parametros de la url q envio
    this.route.params.subscribe(parametros =>{
      console.log(parametros['id']);

      this.productoServices.getProducto(parametros['id'])
      .subscribe((producto: any) => {
        console.log(producto);
        this.id= parametros['id'];
        this.producto=producto;

      });

    });

  }

}
