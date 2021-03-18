import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Datos } from '../interfaces/Datos'

@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {

  constructor(private httpClient: HttpClient) {
    console.log("El servicio obtener-datos está en marcha");
  }

  obtenerPosts(){
    return this.httpClient.get<Datos[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
