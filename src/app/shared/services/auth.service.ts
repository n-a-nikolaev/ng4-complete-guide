import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { LoginData } from '../interfaces/login-data.interface';

@Injectable()
export class AuthService {

    public user: Observable<firebase.User>;

    constructor(
        private afAuth: AngularFireAuth,
        private snackbar: MdSnackBar
    ) {
        this.user = afAuth.authState;
    }

    public register(data: LoginData): firebase.Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
    }

    public login(data: LoginData): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
    }

    public logout(): firebase.Promise<any> {
        return this.afAuth.auth.signOut();
    }

    public handleAuthError(error: any): void {
        this.snackbar.open(error.message, '', {
            duration: 3000
        });
    }

}