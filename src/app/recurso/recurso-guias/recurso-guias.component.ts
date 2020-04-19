import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-recurso-guias',
  templateUrl: './recurso-guias.component.html',
  styleUrls: ['./recurso-guias.component.css']
})


export class RecursoGuiasComponent {

  private userNickname: any;

  constructor(private route: ActivatedRoute,
              private http:HttpClient) {
    this.userNickname = Auth0.getProfile().nickname;
  }


}
