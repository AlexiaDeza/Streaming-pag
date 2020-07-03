import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/empleado.service';
import { Empleado } from 'src/app/shared/empleado.model' ;
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  list: Empleado[];

  constructor(public service : EmpleadoService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }


  ngOnInit() {
    this.service.getEmpleados().subscribe(actionArray=>{
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          nombre: item.payload.doc.data()['nombre'],
          posicion: item.payload.doc.data()['posicion'],
          mail: item.payload.doc.data()['mail']
        } as Empleado
      })
    });
  }

  onEdit(emp:Empleado){
    this.service.formData = Object.assign({},emp);
  }

  onDelete(id:string){
    if(confirm("Seguro que desea eliminar a este Empleado?")){
      this.firestore.doc('empleados/'+id).delete();
      this.toastr.warning('Eliminado con Exito', 'Registro de Empleados')
    }

  }
}
