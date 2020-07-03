import { Injectable } from '@angular/core';
import { Libro } from './libro.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  formData: Libro;
  
  constructor(public firestore:AngularFirestore) { }
  
  getLibros(){
    return this.firestore.collection('libros').snapshotChanges();
  }
}
