import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth.service';
import { LoginData } from '../../../shared/interfaces/login-data.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(private authService: AuthService) { }

  /**
   * @name ngOnInit
   * @description
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * https://angular.io/api/core/OnInit
   * 
   * @memberof RegisterComponent
   */
  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  /**
   * @name onSubmit
   * @description Event Handler for login for submission
   * 
   * @memberof RegisterComponent
   */
  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value as LoginData)
        .then(response => {
          this.authService.handleAuthSuccess('Registration Successful!');
        })
        .catch(e => {
          this.authService.handleAuthError(e);
        })
    }
  }
}
