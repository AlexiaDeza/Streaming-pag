import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/shared/usuario.model' ;
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  list: Usuario[];

  constructor(public service : UsuarioService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }


  ngOnInit() {
    this.service.getUsuarios().subscribe(actionArray=>{
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          nombre: item.payload.doc.data()['nombre'],
          posicion: item.payload.doc.data()['posicion'],
          mail: item.payload.doc.data()['mail']
        } as Usuario
      })
    });
  }

  onEdit(us:Usuario){
    this.service.formData = Object.assign({},us);
  }

  onDelete(id:string){
    if(confirm("Seguro que desea eliminar a este Usuario?")){
      this.firestore.doc('usuarios/'+id).delete();
      this.toastr.warning('Eliminado con Exito', 'Registro de Usuarios')
    }

  }
}
