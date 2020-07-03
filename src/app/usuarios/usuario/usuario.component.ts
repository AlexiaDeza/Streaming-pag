import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public service : UsuarioService,
    private firestore:AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form! = null)
      form.resetForm();
    this.service.formData = {
      id : null,
      nombre : '',
      mail : '',
    }
  }

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('usuarios').add(data);
    else
    this.firestore.doc('usuarios/'+ form.value.id).update(data);
      this.resetForm(form);
    this.toastr.success('Enviado con Exito','Registrarse')
  }

}