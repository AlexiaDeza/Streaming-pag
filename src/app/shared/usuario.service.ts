import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  formData: Usuario;
  
  constructor(public firestore:AngularFirestore) { }
  
  getUsuarios(){
    return this.firestore.collection('usuarios').snapshotChanges();
  }
}