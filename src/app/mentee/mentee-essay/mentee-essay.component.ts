import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { MenteeService } from '../shared/mentee.service';
import { Mentee } from '../shared/mentee.model'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-mentee-essay',
  templateUrl: './mentee-essay.component.html',
  styleUrls: ['./mentee-essay.component.css']
})
export class MenteeEssayComponent{
  private todo : FormGroup;
  private readonly API_URL = 'http://brasa-pre.herokuapp.com/api';
  public link:any;
  private headers: HttpHeaders;
  private userNickname: any;
  public essays:any;
  public role:any;
  public username:any;
  public menteeName:any;

 /*AddEssay(){
   this.essayArray.push({'link':''});
 };
 RemoveEssay(idx){
   this.essayArray.splice(idx, 1);
 };*/

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private getMentee: HttpClient,
              private _location: Location,
            private menteeService: MenteeService) {
                this.userNickname = Auth0.getProfile().nickname;
                this.headers = new HttpHeaders({'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                    });
                this.todo = this.formBuilder.group({});
                this.getScheduledExams();
                this.getUsername(this.userNickname);

  }

  public goBack() {
    this._location.back();
  }

  getUsername(username) {
    this.menteeService.getUser(username).subscribe(usuario=>{
      this.role = usuario.role_name
      this.username = usuario.username
      if (this.role == 'mentor'){
        this.menteeService.getMentor(this.userNickname).subscribe(mentor=>{
          this.getMenteeName(mentor.id)
        })
      }
    });
  }

  getMenteeName(mentorId) {
    this.menteeService.getMenteeFromMentor(mentorId).subscribe(usuario=>{
      this.menteeName = usuario.username
    });
  }

  public logForm(){
        this.http.post(`${this.API_URL}/uploads`, {
          "link": this.link,
          "username": this.userNickname
        }, {headers: this.headers}).subscribe(data => {
          this.getScheduledExams();
            console.log(data['_body']);
            }, error => {
            console.log(error);
            });
        this.link = ''

  };

  private getScheduledExams() {
   this.menteeService.getAllEssays().subscribe(tests => {
     tests['objects']
     this.essays = tests['objects']
   });
 }

  public excludeEssay(id){
    console.log(id)
    this.http.delete<any>(`${this.API_URL}/uploads/`+id, {headers: this.headers}).subscribe(data => {

     }, error => {
      console.log(error);
    });;

    this.essays.forEach((essay, index)=>{
      console.log(essay.id)
      if (essay.upload_id == id){
        this.essays.splice(index,1)
      }
    })
  }






}
