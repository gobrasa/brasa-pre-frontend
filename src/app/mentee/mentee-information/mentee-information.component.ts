import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mentee } from '../shared/mentee.model';
import { MenteeService } from '../shared/mentee.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-mentee-information',
  templateUrl: './mentee-information.component.html',
  styleUrls: ['./mentee-information.component.css']
})

export class MenteeInformationComponent {

  menteeDeck: any;
  mentorDecks: any;
  uniDecks: any;
  menteeId: any;
  public role:any;
  public username:any;
  public userNickname:any;


  constructor(private route: ActivatedRoute,
              private http:HttpClient,
            private menteeService: MenteeService) {
              this.getMentees();
              this.getMentors();
              this.getUni();
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

  getUsername(username) {
    this.menteeService.getUser(username).subscribe(usuario=>{
      this.role = usuario.role_name
      this.username = usuario.username
    });
  }

   private getMentees() {
    this.getAllMentees().subscribe(menteeDecks => {
         this.menteeDeck = menteeDecks['objects'];
         this.menteeId = this.route.snapshot.paramMap.get('id');
          console.log(this.menteeDeck);
    });
  }

  getAllMentors() {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);

  }

  private getMentors() {
    this.getAllMentors().subscribe(mentorDecks => {
         this.mentorDecks = mentorDecks['objects'];


    });
  }

  getAllUniversity() {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/university_applications', httpOptions);
    
  }

  private getUni() {
    this.getAllUniversity().subscribe(uniDecks => {
         this.uniDecks = uniDecks['objects']; 
         console.log(uniDecks);
    });
  }

}
