import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import * as Auth0 from 'auth0-web';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { User } from './user.model';
import { MenteeService } from '../mentee/shared/mentee.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string = '/admin-eua';

  login = Auth0.signIn;
  logout = Auth0.signOut;

  private readonly HS_API_URL = 'https://brasa-pre.herokuapp.com/api';

  constructor(private http: HttpClient) {
  }


  check_authenticated() {
      Auth0.subscribe((authenticated) => (this.isLoggedIn = authenticated));
      return this.isLoggedIn;
  }

  retrieve_username(){
    let profile = Auth0.getProfile();
    return profile.nickname;
  }

  check_role_from_username(username: string) : Observable<User>{
    let httpOptions = MenteeService.buildHttpOptions();

    let user2 : User;

    return this.http.get<User>(`${this.HS_API_URL}/users/${username}`,httpOptions)

    }

}
