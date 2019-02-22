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

@Component({
  selector: 'app-mentee-essay',
  templateUrl: './mentee-essay.component.html',
  styleUrls: ['./mentee-essay.component.css']
})
export class MenteeEssayComponent{
  private todo : FormGroup;
  private readonly API_URL = 'http://brasa-pre.herokuapp.com/api';
  public essayArray:any=[];
  private headers: HttpHeaders;

 AddEssay(){
   this.essayArray.push({'link':''});
 };
 RemoveEssay(idx){
   this.essayArray.splice(idx, 1);
 };

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private getMentee: HttpClient) {

                this.headers = new HttpHeaders({'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                    });
                this.essayArray.push({'link':''});
                this.todo = this.formBuilder.group({});

               }

  public logForm(){
    for (let i =0; i< this.essayArray.length; i++){
        this.http.post(`${this.API_URL}/exams`, this.essayArray[i], {headers: this.headers}).subscribe(data => {
            console.log(data['_body']);
            }, error => {
            console.log(error);
            });
    };
  };




}
