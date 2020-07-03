import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  formData: Empleado;
  
  constructor(public firestore:AngularFirestore) { }
  
  getEmpleados(){
    return this.firestore.collection('empleados').snapshotChanges();
  }
}
