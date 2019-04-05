import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';

import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authenticated = false;

  signIn = Auth0.signIn;
  signOut = Auth0.signOut;
  private userNickname: any;
  private readonly API_URL = 'https://brasa-pre.herokuapp.com/api';
  public role:any;
  constructor(private http: HttpClient){

  }

  ngOnInit() {
    const self = this;
    Auth0.subscribe((authenticated) => (self.authenticated = authenticated));
    this.userNickname = Auth0.getProfile().nickname;
    this.getUsername(this.userNickname);
  }

  static buildHttpOptions(){
   let httpOptions = {
     headers: new HttpHeaders({
       'Authorization': `Bearer ${Auth0.getAccessToken()}`
     }),
   };
   return httpOptions;
  }

  getUsername(username) {
    let httpOptions = AppComponent.buildHttpOptions();
    this.http.get<any>(`${this.API_URL}/users?q={"filters":[{"name":"username","op":"eq","val": "` + username + `"}],"single":true}`, httpOptions).subscribe(usuario=>{
      this.role = usuario.role_name
    });;
  }



}
