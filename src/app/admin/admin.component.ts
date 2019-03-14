
import {Exam} from './admin.model';
import { Subscription } from 'rxjs';
import {ExamsApiService} from './admin-api.service';

import * as Auth0 from 'auth0-web';
import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'admin',
  template: `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
    <div class="container">
      <div class="content">
          <div id="title">
            <div class="layer">
                <div id="header-links">
                  
                </div>
  
                <div id="title-text">
                    <h1>Bem-Vindo</h1>
                    <p>2019 | 2020</p>
                </div>
            </div>
            
          </div>
          <div id="info">
            <h1>Objetivo do APP</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
  
          <div id="footer">
            <p></p>
          </div>
  
  
      </div>
      
    </div>
  </body>
  </html>
    
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