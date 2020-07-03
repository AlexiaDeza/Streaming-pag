import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/shared/libro.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor(public service : LibroService,
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
      titulo : '',
      autor : '',
      editorial : '',
      coleccion : '',
    }
  }

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('libros').add(data);
    else
    this.firestore.doc('libros/'+ form.value.id).update(data);
      this.resetForm(form);
    this.toastr.success('Enviado con Exito','Registrarse')
  }

}
