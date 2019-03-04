import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { MentorService } from '../shared/mentor.service';
import { Mentor } from '../shared/mentor.model'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Location} from '@angular/common';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrls: ['./mentor-detail.component.css']
})
export class MentorDetailComponent {
  public todo : FormGroup;
  private readonly API_URL = 'http://brasa-pre.herokuapp.com/api';
  //private readonly API_URL = 'http://bce8300d.ngrok.io';
  private headers: HttpHeaders;
  public mentorProfile:any=[];
  public mentorId:any;
  public mentorDados:any=[];
  public userNickname: any;
  public role: any;
  public username: any;


  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private getMentee: HttpClient,
    private mentorService: MentorService,
    private route: ActivatedRoute,
    private _location: Location ) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });
    this.userNickname = Auth0.getProfile().nickname;
    this.mentorDados.push({first_name: '',
    last_name: '',
    university: ''
    })
    this.todo = this.formBuilder.group({});
    this.mentorId = this.route.snapshot.paramMap.get('id');
    this.getInformation();
    this.getUser(this.userNickname);
  }

  getUser(username) {
    this.mentorService.getUser(username).subscribe(usuario=>{
      console.log(usuario.role_name)
      this.role = usuario.role_name
      this.username = usuario.username
    });


  }

  public goBack() {
   this._location.back();
 }

  public getInformation(){
    this.mentorService.getMentorById(this.mentorId).subscribe(mentor=>{
      this.mentorDados = {
        first_name: mentor.first_name,
        last_name: mentor.last_name,
        university: mentor.universities
      };
    });
  }

  public logForm(){
    console.log(this.mentorDados)
    //console.log(this.http.post(`${this.API_URL}/mentees/` + this.menteeId, this.todo.value, {headers: this.headers}))
    console.log('ˆˆ')

    this.http.put(`${this.API_URL}/mentors/` + this.mentorId
      , {
      "first_name": this.mentorDados.first_name,
      "last_name": this.mentorDados.last_name,
      "university": this.mentorDados.university
    }, {headers: this.headers, observe: "response"}).toPromise().then((data) => {
      if (data.status == 204) {
        this._location.back();
        //this.navCtrl.goBack("/tabs/mentee/listing/1");
      }
      }).catch(err=> { console.log(err) })
      , error => {
        console.log(error);
      };


  }



}
