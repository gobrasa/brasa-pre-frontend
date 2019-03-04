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
  private userDecks: any;
  private userNickname: any;
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

  getAllMentees() {
    return this.http.get('http://brasa-pre.herokuapp.com/api/mentees');
  }

  getAllUsers() {
    return this.http.get('http://brasa-pre.herokuapp.com/api/users');
  }

  getAllMenteesFromMentor(){
    return this.http.get('http://brasa-pre.herokuapp.com/api/mentors');
  }

  private getMentees() {
    this.getAllMentees().subscribe(menteeDecks => {
        this.menteeDecks = menteeDecks['objects'];
        console.log(menteeDecks, 'here');
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
        //console.log(userDecks);

    });
  }

  private getMenteesFromMentor() {
    this.getAllMenteesFromMentor().subscribe(mentorDeck => {
        this.mentorDeck = mentorDeck['objects'];


    });
  }


}
