import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-recurso-form',
  templateUrl: './recurso-form.component.html',
  styleUrls: ['./recurso-form.component.css']
})


export class RecursoFormComponent {

  private userNickname: any;

  constructor(private route: ActivatedRoute,
              private http:HttpClient) {
    this.userNickname = Auth0.getProfile().nickname;
  }


}
