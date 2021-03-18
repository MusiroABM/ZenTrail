import { Component } from '@angular/core';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  datos = [];
  constructor(private servicioObtenerDatos: ObtenerDatosService) {
    this.servicioObtenerDatos.obtenerPosts().subscribe(datos => {
      this.datos = datos;
    });
  }

}
