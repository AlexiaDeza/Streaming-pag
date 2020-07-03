import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/shared/libro.service';
import { Libro } from 'src/app/shared/libro.model' ;
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  list: Libro[];

  constructor(public service : LibroService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }


  ngOnInit() {
    this.service.getLibros().subscribe(actionArray=>{
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          titulo: item.payload.doc.data()['titulo'],
          autor: item.payload.doc.data()['autor'],
          editorial: item.payload.doc.data()['editorial'],
          coleccion: item.payload.doc.data()['coleccion']
        } as Libro
      })
    });
  }

  onEdit(lib:Libro){
    this.service.formData = Object.assign({},lib);
  }

  onDelete(id:string){
    if(confirm("Seguro que desea eliminar a este Libro?")){
      this.firestore.doc('libros/'+id).delete();
      this.toastr.warning('Eliminado con Exito', 'Registro de Libros')
    }

  }
}
