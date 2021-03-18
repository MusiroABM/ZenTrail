import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent {

  rutasPrueba: string[] = [
    'Fuente Serna', 'Camino del Lago', 'Paseo del melocotón'
  ];

  nombre:string;
  distancia:number;
  direccion: {
    provincia:string
    puntoInicio:string
    puntoFin:string
  };
  comentarios: string[];

  constructor(){
    this.nombre=this.rutasPrueba[0];
    this.distancia=3.6;
    this.direccion = {
      provincia: "Cuenca",
      puntoInicio: "12'34",
      puntoFin: "18'34"
    }
  }

  mostrar:boolean = false;
  cambiaEstado(){
    if (this.mostrar){
      this.mostrar=false;
    }else{
      this.mostrar=true;
    }
  }

  //------------------------Eventos
  saludar(){
    alert("Holi");
  }
  valoracion(){
    alert("Pues la verdad que está muy bien");
  }
  eliminarRuta(ruta:string){
    for(let i =0; i<this.rutasPrueba.length; i++){
      if(this.rutasPrueba[i] == ruta){
        this.rutasPrueba.splice(i,1);
        break;
      }
    }
  }
  nuevaRuta(nombre){
    //console.log(nombre.value);
    this.rutasPrueba.push(nombre.value);
    nombre.value=''; //limpiar el campo de input
    return false; //evita la recarga web
  }

  //------------------------------------Data binding
  nombreSen:string = 'Ejemplo';
  edadSen:number = 0;
}