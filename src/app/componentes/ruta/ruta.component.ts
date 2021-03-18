import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  @Input() nombreRuta; //entrada del componente
  constructor() { }

  ngOnInit(): void {
  }

}
