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

  equipo: any[] = [];

//injectamos private http: HttpClient para conectar con servidores externos etc
  constructor( private http: HttpClient) {
//aqui injectamos al app.component.ts
    console.log("Servicios de pag cargado");

    this.cargarInfo();
    this.cargarEquipo();


  }

  private cargarInfo(){
    //Leer JSON
    this.http.get('assets/data/data-pagina.json')//indicamos donde esta el archivo
      .subscribe( (resp: InfoPaginaInterface) => {//leer json


        this.cargada=true;
        this.info = resp;//damos parametros del arreglo para exportar

        //console.log(this.info);//espeficificar en arreglo

      });
  }
  private cargarEquipo(){
    //Leer JSON firebase
    this.http.get('https://enovimex-default-rtdb.firebaseio.com/equipo.json')//indicamos donde esta el archivo
      .subscribe( (resp: any) => {//leer json
        this.equipo = resp;//damos parametros del arreglo para exportar
        console.log(this.equipo);//espeficificar en arreglo

      });

  }

}
