import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';



@Injectable()

export class AuthService {
error = null;
  constructor(public afAuth: AngularFireAuth,
    private router: Router ) {
      // checking the user login state
    this.afAuth.authState.subscribe( user => {
      // if logged in go to the home page
      if ( user ) {
        this.router.navigate(['home']);
      }
    });
  }

  loginWith(service: string) {
    switch (service) {
      case 'google':
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      case 'facebook':
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      case 'register':
      return this.router.navigate(['register']);
      case 'without-login':
      return this.router.navigate(['home']);
  }

}
    logout() {
      return this.afAuth.auth.signOut();
    }

    signin(email: string, pw: string) {
      console.log('signin');
      this.afAuth.auth.signInWithEmailAndPassword( email, pw).catch((err) => {
        this.error = err.message;
        alert(this.error);
      });
    }

    signup(email: string, pw: string) {
      console.log('registration');
      this.afAuth.auth.createUserWithEmailAndPassword( email, pw).catch(function(error){
        console.log('signUp Error', error);
      }) ;
    }
}

