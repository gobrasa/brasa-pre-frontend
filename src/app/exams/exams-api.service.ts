import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import * as Auth0 from 'auth0-web';

import { catchError } from 'rxjs/operators';
import { map, filter, scan } from 'rxjs/operators';
import {API_URL} from '../env';
import {Exam} from './exam.model'
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable()
export class ExamsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(`${API_URL}/exams`)
      .pipe(catchError(ExamsApiService._handleError));
  }

  saveExam(exam: Exam): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      })
    };
    return this.http
      .post(`${API_URL}/exams`, exam, httpOptions);
  }
  
  deleteExam(examId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      })
    };
    return this.http
      .delete(`${API_URL}/exams/${examId}`, httpOptions);
  }

}