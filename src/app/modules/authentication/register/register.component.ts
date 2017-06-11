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

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value as LoginData)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.authService.handleAuthError(e);
        })
    }
  }
}
