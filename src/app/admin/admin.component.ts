
import {Exam} from './admin.model';
import { Subscription } from 'rxjs';
import {ExamsApiService} from './admin-api.service';

import * as Auth0 from 'auth0-web';
import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'exams',
  template: `
    <h2>Exams</h2>
    <iframe src="http://ec2-54-215-139-223.us-west-1.compute.amazonaws.com/embed/query/26/visualization/51?api_key=41qNtAQ3AXN9dbUelzoDMDzegnIJq1oemI3Ozm14" width="900" height="600"></iframe>
    <p>Choose an exam and start studying.</p>
    <div class="exams">
      <mat-card class="example-card" *ngFor="let exam of examsList" class="mat-elevation-z5">
        <mat-card-content>
          <mat-card-title>{{exam.category}}</mat-card-title>
          <mat-card-subtitle>{{exam.subcategory}}</mat-card-subtitle>
          <button mat-raised-button color="accent">Start Exam</button>
          <button mat-button color="warn"
                  (click)="delete(exam.id)">
            Delete
          </button>
          
        </mat-card-content>
      </mat-card>
    </div>
    <button mat-fab color="primary" *ngIf="authenticated"
            class="new-exam" routerLink="/new-exam">
      <i class="material-icons">note_add</i>
    </button>
    
  `,
  styleUrls: ['admin.component.css'],
})
export class ExamsComponent implements OnInit, OnDestroy {
  examsListSubs: Subscription;
  examsList: Exam[];
  authenticated = false;

  constructor(private examsApi: ExamsApiService) { }

  ngOnInit() {

    console.log(Auth0.getProfile());

    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
          this.examsList = res;
        },
        console.error
      );
    const self = this;
    Auth0.subscribe((authenticated) => (self.authenticated = authenticated));
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
  }

  delete(examId: number) {
    this.examsApi
      .deleteExam(examId)
      .subscribe(() => {
        this.examsListSubs = this.examsApi
          .getExams()
          .subscribe(res => {
              this.examsList = res;
            },
            console.error
          )
      }, console.error);
  }

}