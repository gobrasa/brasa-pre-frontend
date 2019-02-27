import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mentee } from '../shared/mentee.model';
import { MenteeService } from '../shared/mentee.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-mentee-information',
  templateUrl: './mentee-information.component.html',
  styleUrls: ['./mentee-information.component.css']
})

export class MenteeInformationComponent {

  menteeDeck: any;
  menteeId: any;


  constructor(private route: ActivatedRoute,
              private http:HttpClient) { 
              this.getMentees();
  }

  getAllMentees() {
    return this.http.get('http://brasa-pre.herokuapp.com/api/mentees');
  }

   private getMentees() {
    this.getAllMentees().subscribe(menteeDecks => {
         this.menteeDeck = menteeDecks['objects'];
    

         this.menteeId = this.route.snapshot.paramMap.get('id');

    });
  }

}
