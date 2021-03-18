import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//-----------------------------------------
import { HolaMundo } from './componentes/holamundo/holamundo.component';
import { RutaComponent } from './componentes/ruta/ruta.component'

import { ObtenerDatosService } from './servicios/obtener-datos.service';
import { AboutComponent } from './componentes/about/about.component';
import { TestingPageComponent } from './componentes/testing-page/testing-page.component'

@NgModule({
  declarations: [   //componentes
    AppComponent,
    HolaMundo,
    RutaComponent,
    AboutComponent,
    TestingPageComponent
  ],
  imports: [  //modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ObtenerDatosService], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
