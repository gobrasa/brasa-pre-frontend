import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MenteeService } from '../mentee/shared/mentee.service';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponentEUA implements OnInit {

  public role:any;
  public userNickname:any;

  constructor(private _location: Location, private menteeService: MenteeService) {
  this.userNickname = Auth0.getProfile().nickname;
  this.getUsername(this.userNickname);
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
