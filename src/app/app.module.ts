import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";


import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { ListaEmpleadosComponent } from './empleados/lista-empleados/lista-empleados.component';
import { EmpleadoService } from './shared/empleado.service';

import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libros/libro/libro.component';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { LibroService } from './shared/libro.service';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { UsuarioService } from './shared/usuario.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ListaEmpleadosComponent,
    UsuariosComponent,
    UsuarioComponent,
    ListaUsuariosComponent,
    LibrosComponent,
    LibroComponent,
    ListaLibrosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot()
  ],
  providers: [EmpleadoService, UsuarioService, LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
