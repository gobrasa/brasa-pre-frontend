import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MentorService } from '../shared/mentor.service';


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
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get('http://brasa-pre.herokuapp.com/api/mentors', httpOptions);
  }

   private getMentees() {
    this.getAllMentor().subscribe(mentorDeck => {
         this.mentorDeck = mentorDeck['objects'];


         this.mentorId = this.route.snapshot.paramMap.get('id');

    });
  }

}
