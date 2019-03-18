import { Component, OnInit, Input } from '@angular/core';
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
import { University } from '../shared/university';
import { Course } from '../shared/course';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrls: ['./mentor-detail.component.css']
})
export class MentorDetailComponent {
  public todo : FormGroup;
  private readonly API_URL = 'http://brasa-pre.herokuapp.com/api';
  //private readonly API_URL = 'http://bce8300d.ngrok.io';
  @Input() public selectedUnis: University[] = new Array();
  @Input() public selectedMajor: Course[] = new Array();
  @Input() public selectedMinor: Course[] = new Array();
  private headers: HttpHeaders;
  public helper: University[]=[];
  public mentorProfile:any=[];
  public mentorId:any;
  public mentorDados:any=[];
  public userNickname: any;
  public role: any;
  public username: any;
  public universities: University[] = [];
  public courses: Course[] = [];
  public helperMinor: any;
  settings = {};
  settingsMajor = {};
  settingsMinor = {};
  public helper3 = -1;


  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private getMentee: HttpClient,
    private mentorService: MentorService,
    private route: ActivatedRoute,
    private _location: Location ) {
    this.headers = new HttpHeaders({'Authorization': `Bearer ${Auth0.getAccessToken()}`
    });
    this.userNickname = Auth0.getProfile().nickname;
    this.todo = this.formBuilder.group({
            uniList: [],
            major: '',
            minor: ''
        });
    this.mentorDados.push({first_name: '',
    last_name: '',
    university: '',
    city: '',
    state: '',
    major: '',
    minor: ''
    })

    //this.todo = this.formBuilder.group({});
    this.mentorId = this.route.snapshot.paramMap.get('id');
    this.getInformation();
    this.getUser(this.userNickname);
    this.getUniList();
    this.selectCollege(this.mentorId);
    this.selectCourses(this.mentorId);
    this.settings = {
      singleSelection: true,
      text: "Selecione sua Universidade",
      enableFilterSelectAll: false,
      enableSearchFilter: true,
      labelKey: "name",
      classes: "myclass custom-class"
    };

    this.settingsMajor = {
      singleSelection: true,
      text: "Selecione seu Major",
      enableFilterSelectAll: false,
      enableSearchFilter: true,
      labelKey: "name",
      classes: "myclass custom-class"
    };

    this.settingsMinor = {
      singleSelection: true,
      text: "Selecione seu Minor",
      enableFilterSelectAll: false,
      enableSearchFilter: true,
      labelKey: "name",
      classes: "myclass custom-class"
    };

  }

  getUser(username) {
    this.mentorService.getUser(username).subscribe(usuario=>{
      this.role = usuario.role_name
      this.username = usuario.username
    });


  }

  onMinorSelect(item: any) {
    this.mentorDados.minor = item.name
  }

  public goBack() {
   this._location.back();
 }

  public getInformation(){
    this.mentorService.getMentorById(this.mentorId).subscribe(mentor=>{
      if (mentor.minor){
        this.mentorDados = {
          first_name: mentor.first_name,
          last_name: mentor.last_name,
          university: mentor.universities,
          city: mentor.city,
          state: mentor.state,
          major: mentor.major.name,
          minor: mentor.minor.name

        };
      } else {
        this.mentorDados = {
          first_name: mentor.first_name,
          last_name: mentor.last_name,
          university: mentor.universities,
          city: mentor.city,
          state: mentor.state,
          major: mentor.major.name
      }
    }

    });
  }

  public logForm(){

    if (this.todo.value.minor[0] == null){
      this.helperMinor = null
    } else {
      this.helperMinor = this.todo.value.minor[0].id
    }


    this.http.put(`${this.API_URL}/mentors/` + this.mentorId, {
      "first_name": this.mentorDados.first_name,
      "last_name": this.mentorDados.last_name,
      "university_id": this.todo.value.uniList[0].id,
      "city": this.mentorDados.city,
      "state": this.mentorDados.state,
      "major_course_id": this.todo.value.major[0].id,
      "minor_course_id": this.helperMinor
    }, {headers: this.headers, observe: "response"}).toPromise().then((data) => {
      if (data.status == 200) {
        this._location.back();
      }
      }).catch(err=> { console.log(err) })
      , error => {
        console.log(error);
      };


  }

public async selectCollege(id){
  this.mentorService.getMentorUniversity(id).subscribe(mentor=>{
    console.log(mentor.university_id)
      this.mentorService.getCollegeNameById(mentor.university_id).subscribe(collegeName=>{
        this.selectedUnis.push({id: mentor.university_id, name: collegeName.name});
        console.log(this.selectedUnis)
        this.mentorDados.university = collegeName.name
      })
})

this.selectedUnis = this.helper
return this.selectedUnis
}

public async selectCourses(id){
  this.mentorService.getMentorMajor(id).subscribe(mentor=>{
    this.selectedMajor.push({id: mentor.major_course_id, name: mentor.major.name, category: mentor.major.category});
    this.selectedMinor.push({id: mentor.minor_course_id, name: mentor.minor.name, category: mentor.minor.category});


})

return this.selectedMinor, this.selectedMajor
}

  private getUniList() {

   this.mentorService.getAllUniversities().subscribe(tests => {
     this.universities = tests['objects']
     console.log(tests['objects'])
     const result = [];
     const mapUniversities = new Map();
     for (const item of tests['objects']) {
         if(!mapUniversities.has(item.name)){
             mapUniversities.set(item.name, item.name);    // set any value to Map
             result.push({
                  id: item.id,
                 name: item.name
             });
         };

       };
       this.universities = result;

   });

   this.mentorService.getAllCourses().subscribe(courses => {
     this.universities = courses['objects']
     console.log(courses['objects'])

     const result = [];
     const mapCourses = new Map();
     for (const item of courses['objects']) {
         if(!mapCourses.has(item.name)){
             mapCourses.set(item.name, item.name);    // set any value to Map
             result.push({
                  id: item.id,
                 name: item.name,
                 category: item.category
             });
         };

       };
       this.courses = result;



 });
}


}
