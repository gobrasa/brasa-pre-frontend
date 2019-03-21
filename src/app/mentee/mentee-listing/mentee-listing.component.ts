import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Auth0 from 'auth0-web';
import { Router } from '@angular/router';
import { MenteeService } from '../shared/mentee.service';
import { Mentee } from '../shared/mentee.model';

@Component({
  selector: 'app-mentee-listing',
  templateUrl: './mentee-listing.component.html',
  styleUrls: ['./mentee-listing.component.css']
})


export class MenteeListingComponent {

  private menteeDecks: any;
  // accessible from template, cannot be private
  // (https://stackoverflow.com/questions/34574167/angular2-should-private-variables-be-accessible-in-the-template)
  userDecks: any;
  userNickname: any;
  private mentorDeck: any;
  public role: any;
  public username: any;
  public mentorId: any;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private menteeService: MenteeService) {
        this.getMentees();
        this.getUser();
        this.getMenteesFromMentor();
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

  getAllMentees() {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/mentees', httpOptions);
  }

  getAllUsers() {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/users', httpOptions);
  }

  getAllMenteesFromMentor(){
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
  }

  private getMentees() {
    this.getAllMentees().subscribe(menteeDecks => {
        this.menteeDecks = menteeDecks['objects'];
    });
  }

  getMentorId(username) {
    this.menteeService.getMentor(username).subscribe(usuario=>{
      this.mentorId = usuario.id
    });
  }

  getUsername(username) {
    this.menteeService.getUser(username).subscribe(usuario=>{
      this.role = usuario.role_name
      this.username = usuario.username
      if (this.role == 'mentor'){
        this.getMentorId(this.userNickname)
      }
    });
  }

  private getUser() {
    this.getAllUsers().subscribe(userDecks => {
        this.userDecks = userDecks['objects'];

    });
  }

  private getMenteesFromMentor() {
    this.getAllMenteesFromMentor().subscribe(mentorDeck => {
        this.mentorDeck = mentorDeck['objects'];


    });
  }


}
