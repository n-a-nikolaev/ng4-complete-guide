import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth.service';
import { LoginData } from '../../../shared/interfaces/login-data.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * @name ngOnInit
   * @description 
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * https://angular.io/api/core/OnInit
   * 
   * @memberof LoginComponent
   */
  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false)
    })
  }

  /**
   * @name onSubmit
   * @description Event Handler for login for submission
   * 
   * @memberof LoginComponent
   */
  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as LoginData)
        .then(response => {
          this.authService.handleAuthSuccess('Login Successful!');
          this.router.navigate(['repecies']);
        })
        .catch(e => {
          this.authService.handleAuthError(e);
        })
    }
  }
}
