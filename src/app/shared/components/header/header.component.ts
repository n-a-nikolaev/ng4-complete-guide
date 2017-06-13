import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  private user: any = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * @name ngOnInit
   * @description
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * 
   * @memberof HeaderComponent
   */
  public ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  /**
   * @name ngOnDestroy
   * @description
   * Lifecycle hook that is called when a directive, pipe or service is destroyed.
   * 
   * @memberof HeaderComponent
   */
  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  /**
   * @name logout
   * @description Click event handler for logout button.
   * Perform logout and redirect to home page.
   * 
   * @memberof HeaderComponent
   */
  public logout(): void {
    this.authService.logout()
      .then(response => {
        this.router.navigate(['/']);
      });
  }
}
