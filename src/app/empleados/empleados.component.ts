import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../shared/empleado.service';
import { Empleado } from '../shared/empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }
}
