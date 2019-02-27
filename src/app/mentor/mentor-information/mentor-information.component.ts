import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-mentor-information',
  templateUrl: './mentor-information.component.html',
  styleUrls: ['./mentor-information.component.css']
})

export class MentorInformationComponent {

  mentorDeck: any;
  mentorId: any;


  constructor(private route: ActivatedRoute,
              private http:HttpClient) { 
              this.getMentees();
  }

  getAllMentor() {
    return this.http.get('http://brasa-pre.herokuapp.com/api/mentors');
  }

   private getMentees() {
    this.getAllMentor().subscribe(mentorDeck => {
         this.mentorDeck = mentorDeck['objects'];
    

         this.mentorId = this.route.snapshot.paramMap.get('id');

    });
  }

}
