import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import * as Auth0 from 'auth0-web';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string = '/exams';

  login = Auth0.signIn;
  logout = Auth0.signOut;

  check_authenticated() {
      Auth0.subscribe((authenticated) => (this.isLoggedIn = authenticated));
      return this.isLoggedIn;
  }
  
}