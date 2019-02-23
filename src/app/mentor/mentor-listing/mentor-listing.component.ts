import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mentor-listing',
  templateUrl: './mentor-listing.component.html',
  styleUrls: ['./mentor-listing.component.css']
})


export class MentorListingComponent {

  private mentorDecks: any;

  constructor(private route: ActivatedRoute,
              private http:HttpClient) {        
        this.getMentors();                        
  }

  getAllMentors() {
    return this.http.get('http://brasa-pre.herokuapp.com/mentors/');
  }

  private getMentors() {
    this.getAllMentors().subscribe(mentorDecks => {
        this.mentorDecks = mentorDecks;
        console.log(mentorDecks);
      
    });
  }
 
  
}

  
  

