import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private route: ActivatedRoute,
              private http:HttpClient) {        
        this.getMentees();                        
  }

  getAllMentees() {
    return this.http.get('http://brasa-pre.herokuapp.com/mentees/');
  }

  private getMentees() {
    this.getAllMentees().subscribe(menteeDecks => {
        this.menteeDecks = menteeDecks;
        console.log(menteeDecks);
      
    });
  }
 
  
}

  
  

