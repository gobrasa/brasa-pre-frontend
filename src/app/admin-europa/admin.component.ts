import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MenteeService } from '../mentee/shared/mentee.service';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponentEuropa implements OnInit {

  public role:any;
  public userNickname:any;

  constructor(private _location: Location, private menteeService: MenteeService) {
    this.userNickname = Auth0.getProfile().nickname;
    this.getUsername(this.userNickname);

    const scriptTableau = document.createElement('script');
    scriptTableau.src = 'http://ec2-3-233-46-180.compute-1.amazonaws.com/javascripts/api/viz_v1.js';
    scriptTableau.type = 'text/javascript';
    document.body.appendChild(scriptTableau);
 }

  ngOnInit() {
  }

  getUsername(username) {
    this.menteeService.getUser(username).subscribe(usuario=>{
      this.role = usuario.role_name
      if (this.role != 'admin') {
        this._location.back();
      }
    });
  }

}
