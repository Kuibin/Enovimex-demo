import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-cursoudemy-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: any) => {
      console.log(resp);
      this.productos= resp;
      this.cargando=false;

      /*Para crear retraso de 2 seg
      setTimeout(()=>{
        //codigo
      }, 2000);
      */

    });

  }
}
