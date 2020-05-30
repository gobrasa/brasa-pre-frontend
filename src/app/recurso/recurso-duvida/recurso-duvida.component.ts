import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-recurso-duvida',
  templateUrl: './recurso-duvida.component.html',
  styleUrls: ['./recurso-duvida.component.css']
})


export class RecursoDuvidaComponent {

  private userNickname: any;

  constructor(private route: ActivatedRoute,
              private http:HttpClient) {
    this.userNickname = Auth0.getProfile().nickname;
  }


}
