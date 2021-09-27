import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interfaces';

//@Injectable decorador
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {};
  cargada = false;

//injectamos private http: HttpClient para conectar con servidores externos etc
  constructor( private http: HttpClient) {
//aqui injectamos al app.component.ts
    console.log("Servicios de pag cargado");

    //Leer JSON
    this.http.get('assets/data/data-pagina.json')//indicamos donde esta el archivo
      .subscribe( (resp: InfoPaginaInterface) => {//leer json


        this.cargada=true;
        this.info.email = resp.email;

        console.log(this.info);//espeficificar en arreglo

      });
  }
}
