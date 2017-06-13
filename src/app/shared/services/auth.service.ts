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
        this.user = this.afAuth.authState;
    }

    /**
     * @name register
     * @description Create new user with email and password
     * 
     * @param {LoginData} data - data in format { email: string, password: string }
     * @returns {firebase.Promise<any>} 
     * 
     * @memberof AuthService
     */
    public register(data: LoginData): firebase.Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
    }

    /**
     * @name login
     * @description Sign up method, which log user with email and password.
     * 
     * @param {LoginData} data - data in format { email: string, password: string }
     * @returns {firebase.Promise<any>} 
     * 
     * @memberof AuthService
     */
    public login(data: LoginData): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
    }

    /**
     * @name logout
     * @description Logout from application. 
     * firebase user will be null after logout
     * 
     * @returns {firebase.Promise<any>} 
     * 
     * @memberof AuthService
     */
    public logout(): firebase.Promise<any> {
        return this.afAuth.auth.signOut();
    }

    /**
     * @name handleAuthSuccess
     * @description Show success msg due to some action
     * 
     * @param {string} msg - message, that will be shown in snackbar
     * 
     * @memberof AuthService
     */
    public handleAuthSuccess(msg: string): void {
        this.snackbar.open(msg, '', {
            duration: 3000
        });
    }

    /**
     * @name handleAuthError
     * @description Show error msg due to some action
     * 
     * @param {any} error - error obj
     * 
     * @memberof AuthService
     */
    public handleAuthError(error: any): void {
        this.snackbar.open(error.message, '', {
            duration: 3000
        });
    }

}