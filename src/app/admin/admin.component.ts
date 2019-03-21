import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Auth0 from 'auth0-web';
import { MentorService } from '../mentor/shared/mentor.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  mentorDecks: any; // accessible from template, cannot be private
  userDecks: any; // accessible from template, cannot be private
  menteeDecks: any; // accessible from template, cannot be private
  private userNickname: any;

  constructor(private route: ActivatedRoute,
              private http:HttpClient) {
        this.getMentors();
        this.getUser();
        this.getMentee();
        this.getAllMentees()
        this.userNickname = Auth0.getProfile().nickname;
        //console.log(this.userNickname);
  }

  getAllMentors() {
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
  }

  getAllUsers() {
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/users', httpOptions);
  }

  getAllMentees() {
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/mentees', httpOptions);
  }

  private getMentors() {
    this.getAllMentors().subscribe(mentorDecks => {
        this.mentorDecks = mentorDecks['objects'];
        //console.log(mentorDecks);

    });
  }

  private getUser() {
    this.getAllUsers().subscribe(userDecks => {
        this.userDecks = userDecks['objects'];
        //console.log(userDecks);

    });
  }

  private getMentee() {
    this.getAllMentees().subscribe(menteeDecks => {
        this.menteeDecks = menteeDecks['objects'];
        //console.log(menteeDecks);

    });
  }




}