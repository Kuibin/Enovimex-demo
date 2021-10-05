import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //aqui tambien inyectamos para usar el json
  constructor(public infoService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
