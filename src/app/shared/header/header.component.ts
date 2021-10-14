import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //inyeccion para mandar info del json ala pagina (public infoPagService: InfoPaginaService)
  //private router: Router para hacer navegacion interna en componentes
  constructor(public infoPagService: InfoPaginaService,
              private router: Router//para hacer navegacion interna en componentes
    ) { }

  ngOnInit(): void {
  }

  buscarProducto(txtBuscar: string){
    if (txtBuscar.length < 1){
      return;//para q no busque cadenas vacias
    }
    this.router.navigate(['/buscar', txtBuscar]);
  }

}
