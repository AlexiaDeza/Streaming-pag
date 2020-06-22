import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {ThrowStmt} from'@angular/compiler'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private evenAuthError = new BehaviorSubject<string>("");
  evenAuthError$ = this.evenAuthError.asObservable();

  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) { }

    getUserState(){
      return this.afAuth.authState;
    }

    login(email: string, password: string){
      this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error =>{
        this.evenAuthError.next(error);
      }) 
      .then(userCredential =>{
        if(userCredential){
          this.router.navigate(['/home']);
        }
      })
    }

  createUser(user){
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => { 0
          this.newUser= user;
          console.log(userCredential);
          userCredential.user.updateProfile({
            displayName: user.firstName + ' ' + user.lastName
          });

        this.InsertUserData(userCredential)
          .then(() =>{
            this.router.navigate(['/home']);
          });
      })

      .catch( error =>{
        this.evenAuthError.next(error);
      });

  }

  InsertUserData(userCredential: firebase.auth.UserCredential){
    return this.db.doc('Users/${userCredential.user.uid}').set({
      email: this.newUser.email,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      role: 'network user'
    })
  }

  logout(){
    return this.afAuth.signOut();
  }


}

