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
  private headers: HttpHeaders;
  public helper: University[]=[];
  public mentorProfile:any=[];
  public mentorId:any;
  public mentorDados:any=[];
  public userNickname: any;
  public role: any;
  public username: any;
  public universities: University[] = [];
  settings = {};
  public helper3 = -1;


  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private getMentee: HttpClient,
    private mentorService: MentorService,
    private route: ActivatedRoute,
    private _location: Location ) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });
    this.userNickname = Auth0.getProfile().nickname;
    this.todo = this.formBuilder.group({
            uniList: []
        });
    this.mentorDados.push({first_name: '',
    last_name: '',
    university: ''
    })

    //this.todo = this.formBuilder.group({});
    this.mentorId = this.route.snapshot.paramMap.get('id');
    this.getInformation();
    this.getUser(this.userNickname);
    this.getUniList();
    this.selectCollege(this.mentorId);
    this.settings = {
      singleSelection: true,
      text: "Selecione sua Universidade",
      enableFilterSelectAll: false,
      enableSearchFilter: true,
      labelKey: "name",
      classes: "myclass custom-class"
    };
  }

  getUser(username) {
    this.mentorService.getUser(username).subscribe(usuario=>{
      console.log(usuario.role_name)
      this.role = usuario.role_name
      this.username = usuario.username
    });


  }

  onItemSelect(item: any) {
    console.log(item)
    this.mentorDados.university = item.name
  }

  public goBack() {
   this._location.back();
 }

  public getInformation(){
    this.mentorService.getMentorById(this.mentorId).subscribe(mentor=>{
      this.mentorDados = {
        first_name: mentor.first_name,
        last_name: mentor.last_name,
        university: mentor.universities
      };
    });
  }

  public logForm(){
    console.log(this.mentorDados)
    //console.log(this.http.post(`${this.API_URL}/mentees/` + this.menteeId, this.todo.value, {headers: this.headers}))
    console.log('ˆˆ')
    console.log(this.todo.value.uniList[0].id)

    this.http.put(`${this.API_URL}/mentors/` + this.mentorId, {
      "first_name": this.mentorDados.first_name,
      "last_name": this.mentorDados.last_name,
      "university_id": this.todo.value.uniList[0].id
    }, {headers: this.headers, observe: "response"}).toPromise().then((data) => {
      if (data.status == 200) {
        this._location.back();
        //this.navCtrl.goBack("/tabs/mentee/listing/1");
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
 }



}
