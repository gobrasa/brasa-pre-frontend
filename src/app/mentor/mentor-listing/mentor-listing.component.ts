import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Auth0 from 'auth0-web';
import { MentorService } from '../shared/mentor.service';

@Component({
  selector: 'app-mentor-listing',
  templateUrl: './mentor-listing.component.html',
  styleUrls: ['./mentor-listing.component.css']
})


export class MentorListingComponent {

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

    });
  }

  private getUser() {
    this.getAllUsers().subscribe(userDecks => {
        this.userDecks = userDecks['objects'];

    });
  }

  private getMentee() {
    this.getAllMentees().subscribe(menteeDecks => {
        this.menteeDecks = menteeDecks['objects'];

    });
  }




}
