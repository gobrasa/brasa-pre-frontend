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

  public menteeDeck: any;
  public mentorDecks: any;
  public uniDecks: any;
  public menteeId: any;
  public role:any;
  public mentorId:any;
  public userNickname:any;
  public menteeName:any;


  constructor(private route: ActivatedRoute,
              private http:HttpClient,
            private menteeService: MenteeService) {

              this.menteeId = this.route.snapshot.paramMap.get('id');
              this.userNickname = Auth0.getProfile().nickname;
              this.getUsername(this.userNickname);
              this.getUni();
              this.getMentors();



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
      this.getMentees();
    });
  }

   getMentees() {
     console.log('asd')
    this.getAllMentees().subscribe(menteeDecks => {
      console.log('asd')
         this.menteeDeck = menteeDecks['objects'];
         console.log(this.role)
         if (this.role == 'mentor'){
           console.log('mentorerrerer')
           menteeDecks['objects'].forEach(mentee=>{
             console.log(mentee.id, this.menteeId, this.mentorId, mentee.mentor_id)
             if (mentee.id == this.menteeId && this.mentorId == mentee.mentor_id){
               this.menteeName = mentee.username
             }
           })

         }



    });
  }

  getAllMentors() {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);

  }

  private getMentors() {
    this.getAllMentors().subscribe(mentorDecks => {
         this.mentorDecks = mentorDecks['objects'];
         mentorDecks['objects'].forEach(mentor =>{
           if (mentor.username == this.userNickname){
             this.mentorId = mentor.id
           }
         })
    });
  }

  getAllUniversity() {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get('https://brasa-pre.herokuapp.com/api/university_applications', httpOptions);

  }

  private getUni() {
    this.getAllUniversity().subscribe(uniDecks => {
         this.uniDecks = uniDecks['objects'];
    });
  }

}
