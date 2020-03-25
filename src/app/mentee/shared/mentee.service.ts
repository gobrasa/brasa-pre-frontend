import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mentee } from './mentee.model';
import * as Auth0 from 'auth0-web';

import { catchError } from 'rxjs/operators';
import { map, filter, scan } from 'rxjs/operators';
import {Exam} from './exam.model'

@Injectable()
export class MenteeService {


  private readonly API_URL = 'https://brasa-pre.herokuapp.com/api';
  private readonly API_KEY = 'WZmY7utpbDmshO1LYNtsweImq68Rp1h8e1Zjsnz63RbxE029tN';
  private headers: HttpHeaders;


  constructor(private http: HttpClient) {}

  static buildHttpOptions(){
   let httpOptions = {
     headers: new HttpHeaders({
       'Authorization': `Bearer ${Auth0.getAccessToken()}`
     }),
   };
   return httpOptions;
  }

  public getAllmenteeDecks(): Observable<any>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/mentees/`, httpOptions);
  }

  public getUser(username) {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/users?q={"filters":[{"name":"username","op":"eq","val": "` + username + `"}],"single":true}`, httpOptions);
  }

  public getMenteeFromMentor(mentorId) {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/mentees?q={"filters":[{"name":"mentor_id","op":"eq","val": "` + mentorId + `"}],"single":true}`, httpOptions);
  }

  public getMentor(username) {
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/mentors?q={"filters":[{"name":"username","op":"eq","val": "` + username + `"}],"single":true}`, httpOptions);
  }


  public getAllExams(): Observable<Exam[]>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<Exam[]>(`${this.API_URL}/exams`, httpOptions);
  }

  public getAllScheduledExams(): Observable<Exam[]>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<Exam[]>(`${this.API_URL}/scheduled_exams`, httpOptions);
  }

  public getAllEssays(): Observable<any>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get(`${this.API_URL}/uploads`, httpOptions)
  }

  public getMentee(id): Observable<any>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/mentees/` + id, httpOptions);
  }

  public getMenteeCollegeList(id): Observable<any>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/mentees/`+ id + `/university_applications`, httpOptions);
  }

  public getCollegeNameById(id): Observable<any>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/universities/` + id, httpOptions);
  }

  public getMenteeAcceptances(id): Observable<any>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/mentees/`+ id + `/university_acceptances`, httpOptions);
  }

  public getAllUniversities(): Observable<any>{
    let httpOptions = MenteeService.buildHttpOptions();
    return this.http.get<any>(`${this.API_URL}/universities`, httpOptions);
  }

}
