import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mentor } from './mentor.model';
import * as Auth0 from 'auth0-web';

import { catchError } from 'rxjs/operators';
import { map, filter, scan } from 'rxjs/operators';
import { ExamsApiService } from '../../exams/exams-api.service';

@Injectable()
export class MentorService {


  private readonly HS_API_URL = 'https://brasa-pre.herokuapp.com/api';
  //private readonly HS_API_URL = 'http://localhost:5000';
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

  public getUser(username) {
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get<any>(`${this.HS_API_URL}/users?q={"filters":[{"name":"username","op":"eq","val": "` + username + `"}],"single":true}`, httpOptions);
  }

  public getAllUniversities(): Observable<any>{
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get<any>(`${this.HS_API_URL}/universities`, httpOptions);
  }

  public getCollegeNameById(id): Observable<any>{
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get<any>(`${this.HS_API_URL}/universities/` + id, httpOptions);
  }

  public getMentorUniversity(id): Observable<any>{
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get<any>(`${this.HS_API_URL}/mentors/` + id, httpOptions);
  }

  public getAllmentorDecks(): Observable<any>{
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get<any>(`${this.HS_API_URL}/mentors`, httpOptions);
  }

  public userId(): Observable<any>{
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get<any>(`${this.HS_API_URL}/mentores`, httpOptions);
  }

  public getMentorById(id): Observable<any>{
    let httpOptions = MentorService.buildHttpOptions();
    return this.http.get<any>(`${this.HS_API_URL}/mentors/` + id, httpOptions);
  }

}
