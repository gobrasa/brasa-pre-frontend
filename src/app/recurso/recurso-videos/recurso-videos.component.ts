import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import * as Auth0 from 'auth0-web';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-recurso-videos',
  templateUrl: './recurso-videos.component.html',
  styleUrls: ['./recurso-videos.component.css']
})


export class RecursoVideosComponent {
  private userNickname: any;
  searchText;
  items = [
    { name: 'Amherst College', url: 'https://drive.google.com/file/d/1BlPzbxpWTyTqzKiCcbPwxf9AZNNySdaS/preview' },
    { name: 'Berkeley University', url: 'https://drive.google.com/file/d/1jv2HoWcnZrkBlXBlQjf1-_ynAyOcxlKc/preview' },
    { name: 'Cornell University', url: 'https://drive.google.com/file/d/1iYIROmPi2JeHhAh_2HwBIrWGPXEZ-7AA/preview' },
    { name: 'Grinnell College', url: 'https://drive.google.com/file/d/1S3m9gZZhNHsCs_DfVht9kiIrEqvVK_3E/preview' },
    { name: 'Stanford University', url: 'https://drive.google.com/file/d/1Ec8manT4AR3Fmer4DvYFCTq8JM3tFmzK/preview' },
    { name: 'University of Texas at Austin', url: 'https://drive.google.com/file/d/1piUpu6jOC_sSQt3yvVbj0BNCUdWmsUiP/preview' },
    { name: 'Carleton College', url: 'https://drive.google.com/file/d/13KT9l_NbPcFpYPKjtwvQrFaXIxcsf0xE/preview' },
    { name: 'University of British Columbia', url: 'https://drive.google.com/file/d/1KCN72p9s-r7kHiuP3ryJE9IASQlQ3sj1/preview' },
    { name: 'Dartmouth College', url: 'https://drive.google.com/file/d/1_TwAbcjqSG2UPOT1v_i3OiC-IvYXgabz/preview' },
    { name: 'Emory University', url: 'https://drive.google.com/file/d/1F-iYHMbETeSKaqwOO1GTiwA9wtZanisD/preview' },
    { name: 'Georgia Tech University', url: 'https://drive.google.com/file/d/1wglvap5udWYM23aUFdnMb_4S1kkEJS-3/preview' },
    { name: 'John Hopkings', url: 'https://drive.google.com/file/d/1p1LT2NQNRLYsa3vOWUYBwvCWAF3aDARc/preview' },
    { name: 'Minerva', url: 'https://drive.google.com/file/d/1_VSnTGzx_9ZSRa7ccJWMUuZqRUW22vJs/preview' },
    { name: 'MIT', url: 'https://drive.google.com/file/d/13I6aqHVt5FN1iN5WrriShJhB2h5HMPM-/preview' },
    { name: 'Northeastern University', url: 'https://drive.google.com/file/d/1dJbqVKXpp_6auIrg2Ok_T3B6QHmqx7os/preview' },
    { name: 'Rice University', url: 'https://drive.google.com/file/d/108J9tOI1aKu3gmFRES1Zueo1DjfllBCz/preview' },
    { name: 'Rhodes College', url: 'https://drive.google.com/file/d/1lKGt61mwXbdVUsAFhEPdUfGH6uUv4doB/preview' },
    { name: 'Pomona, Claremont, Harvey Mudd College', url: 'https://drive.google.com/file/d/1x-4HZ4CuV1BlY3FKQOb3TUEWq75hQ9TL/preview' },
    { name: 'UCLA', url: 'https://drive.google.com/file/d/1ddICJghP3-r7lCNiSSQn0aeb4vd_RkxI/preview' },
    { name: 'UChicago', url: 'https://drive.google.com/file/d/1lRAm3yoICsmz7pUwgfYSP2Wc0V0Si3_r/preview' },
    { name: 'Yale', url: 'https://drive.google.com/file/d/1ieAjwHEyM4PDWhuztrfw6JMaTEGtHi9e/preview' },
    { name: 'Wellesley College', url: 'https://drive.google.com/file/d/1LlB-0eyoWTOp-xfi2R8RPM-kOGMRakyx/preview' },
    { name: 'Tufts', url: 'https://drive.google.com/file/d/1s-0538LP6q4mKcKqT8Oli1UNq98SRAx_/preview' },
    { name: 'South Florida', url: 'https://drive.google.com/file/d/17rpXUuVyo-Af7Kp_gLA9rTVNNc4aBqXF/preview' },
  ];
  constructor(private route: ActivatedRoute,
              private http:HttpClient,
              public sanitizer: DomSanitizer) {
    this.userNickname = Auth0.getProfile().nickname;
  }


}
