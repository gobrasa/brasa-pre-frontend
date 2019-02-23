import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import * as Auth0 from 'auth0-web';

import { map, filter, scan, catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Exam} from './exam.model'
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable()
export class ExamsApiService {

  examsEndpoint: string;

  constructor(private http: HttpClient) {
    //TODO - Use exams endpoint instead of adding it to every request
    this.examsEndpoint = '/exams/';
  }

  static _handleError(err: HttpErrorResponse | any) {
    console.log(err.message);
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  static buildHttpOptions(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      }),
    };
    return httpOptions;
  }

  // GET list of public, future events
  getExams(): Observable<Exam[]> {
    let httpOptions = ExamsApiService.buildHttpOptions();  

    return this.http
      .get<Exam[]>(`${API_URL}/exams/`,httpOptions)
      .pipe(catchError(ExamsApiService._handleError));
  }

  saveExam(exam: Exam): Observable<any> {
    let httpOptions = ExamsApiService.buildHttpOptions();
    
    return this.http
      .post<any>(`${API_URL}/exams/`, exam, httpOptions)
      .pipe(catchError(ExamsApiService._handleError));
  }
  
  deleteExam(examId: number) {
    
    const httpOptions = ExamsApiService.buildHttpOptions();

    return this.http
      .delete(`${API_URL}/exams/${examId}`, httpOptions);
  }

}