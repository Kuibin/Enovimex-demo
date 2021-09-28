import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();//actualiza el año en que estamos

    //inyeccion para mandar info del json ala pagina (public infoPagService: InfoPaginaService)
    constructor(public infoPagService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
