import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //inyeccion para mandar info del json ala pagina (public infoPagService: InfoPaginaService)
  constructor(public infoPagService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
