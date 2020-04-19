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
    { name: 'Amherst College', url: 'https://www.youtube.com/embed/' },
    { name: 'Berkeley University', url: 'https://www.youtube.com/embed/' },
    { name: 'Cornell University', url: 'https://www.youtube.com/embed/' },
    { name: 'Grinnell College', url: 'https://www.youtube.com/embed/' },
    { name: 'Stanford University', url: 'https://www.youtube.com/embed/' },
    { name: 'University of Texas at Austin', url: 'https://www.youtube.com/embed/' },
    { name: 'Carleton College', url: 'https://www.youtube.com/embed/' },
    { name: 'University of British Columbia', url: 'https://www.youtube.com/embed/' },
    { name: 'Dartmouth College', url: 'https://www.youtube.com/embed/' },
    { name: 'Emory University', url: 'https://www.youtube.com/embed/' },
    { name: 'Georgia Tech University', url: 'https://www.youtube.com/embed/' },
    { name: 'John Hopkings', url: 'https://www.youtube.com/embed/' },
    { name: 'Minerva', url: 'https://www.youtube.com/embed/' },
    { name: 'MIT', url: 'https://www.youtube.com/embed/' },
    { name: 'Northeastern University', url: 'https://www.youtube.com/embed/' },
    { name: 'Rice University', url: 'https://www.youtube.com/embed/' },
    { name: 'Rhodes College', url: 'https://www.youtube.com/embed/' },
    { name: 'Pomona College', url: 'https://www.youtube.com/embed/' },
    { name: 'UCLA', url: 'https://www.youtube.com/embed/' },
    { name: 'UChicago', url: 'https://www.youtube.com/embed/' },
    { name: 'Yale', url: 'https://www.youtube.com/embed/' },
    { name: 'Wellesley College', url: 'https://www.youtube.com/embed/' },
    { name: 'Tufts', url: 'https://www.youtube.com/embed/' },
    { name: 'South Florida', url: 'https://www.youtube.com/embed/' },
  ];
  constructor(private route: ActivatedRoute,
              private http:HttpClient,
              public sanitizer: DomSanitizer) {
    this.userNickname = Auth0.getProfile().nickname;
  }


}
