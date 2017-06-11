import { Route } from "@angular/router";
import { HomeComponent } from './modules/home/home.component';
import { AUTH_ROUTES } from './modules/authentication/authentication.routes';
import { HOME_ROUTES } from './modules/home/home.routes';

export const routes: Route[] = [
    ...HOME_ROUTES, 
    ...AUTH_ROUTES
];