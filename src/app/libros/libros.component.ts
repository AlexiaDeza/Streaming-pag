import { Component, OnInit } from '@angular/core';
import { LibroService } from '../shared/libro.service';
import { Libro } from '../shared/libro.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }
}