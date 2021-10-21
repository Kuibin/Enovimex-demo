import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){

    //Algo asincrono
    //ejecuta el code hasta q se resuelva
    return new Promise<void>((resolve, reject) => {

      this.http.get('https://enovimex-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {
        //console.log(resp);
        this.productos= resp;
        this.cargando=false;
        /*Para crear retraso de 2 seg
        setTimeout(()=>{
          //codigo
        }, 2000);
        */
       resolve();//regresamos q se resolvio
      });

    });

  }

  getProducto(id: string){

    //usar backtit `(ctrl + })
    //permite insertar expresiones ${id}
    return this.http.get(`https://enovimex-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(buscar:string){
    if (this.productos.length == 0){
      //cargar productos y hace un llamado para ejecutar
      this.cargarProductos().then( ()=>{
        //ejecutar despues de tener los productos
        //aplicamos filtro
        this.filtrarProductos(buscar);
        /*this.productosFiltrado = this.productos.filter(producto =>{
          this.productosFiltrado.push(producto);
          return true;*/
        //});

      });
    }else{
        this.filtrarProductos(buscar);
      }
    }

    private filtrarProductos(buscar:string){
      //console.log(buscar);
      this.productosFiltrado = [];
      //para q sea keyinsensitive (q no diferencie entre mayusculas y minusculas)
      buscar = buscar.toLocaleLowerCase();

      this.productos.forEach(prod=>{
        //pequeña variable insensitive
        const tituloLower = prod.titulo.toLocaleLowerCase();

        if (prod.categoria.indexOf(buscar) >= 0 || tituloLower.indexOf(buscar) >= 0)
        {
          this.productosFiltrado.push(prod);
        }

      });

    }

  //fin
}
