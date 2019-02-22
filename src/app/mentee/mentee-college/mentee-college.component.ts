import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { MenteeService } from '../shared/mentee.service';
import { Exam } from '../shared/exam.model';
import { Category } from '../shared/category.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
import { University } from '../shared/university';
import * as Auth0 from 'auth0-web';


@Component({
  selector: 'app-mentee-college',
  templateUrl: './mentee-college.component.html',
  styleUrls: ['./mentee-college.component.css']
})
export class MenteeCollegeComponent {
  private readonly API_URL = 'http://brasa-pre.herokuapp.com';
  //public collegeArray:any=[];
  private headers: HttpHeaders;
  public universities: University[] = [{id: 0, name: "0"}];
  //form: FormGroup;
  //port8Control: FormControl;
  //ports10Page = 2;
  //public category : University;
  menteeId: any;
  public selectedUnis: University[]=[];
  public categoria = new FormControl();
  public categories: string[] = ['teste', 'teste2'];
  itemList = [];
  selectedItems = [];
  settings = {};
  userForm: FormGroup;



  constructor( private formBuilder: FormBuilder,
               private http: HttpClient,
               private getMentee: HttpClient,
               private menteeService: MenteeService,
             private route: ActivatedRoute ) {


    this.headers = new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });
    this.userForm = this.formBuilder.group({
            uniList: []
        });



    //this.menteeId = this.route.snapshot.paramMap.get('id');
    //this.selectColleges(this.menteeId) //pegando college list do 'menteeId' para pré selecionar
    this.settings = {
      singleSelection: false,
      text: "Select College List",
      enableFilterSelectAll: false,
      enableSearchFilter: true,
      lazyLoading: true,
      labelKey: "name",
      badgeShowLimit: 3,
      limitSelection: 20
    };
    this.getUniList(); // pegando todas universities


  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }


  public postCollegeList(){
    // pegando ids
    const universitiesId = [];
    this.userForm.value.uniList.forEach(test=>{
      universitiesId.push(test.id)
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      })
    };

    /*
    this.http.post(`${this.API_URL}/university_applications/university_applications_mentee/` + this.menteeId,
      {universities: universitiesId}, httpOptions).subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });*/
  };

  public selectColleges(id){
    this.menteeService.getCollegeList(id).subscribe(tests=>{
      tests.university_applications.forEach(unis=>{
        this.selectedUnis.push({id: unis.university.id, name:  unis.university.name})
      })
    })
  };

  /*public logForm(){
    for (let i =0; i< this.collegeArray.length; i++){
      this.http.post(`${this.API_URL}/universities/`, this.collegeArray[i], {headers: this.headers}).subscribe(data => {
          console.log(data['_body']);
         }, error => {
          console.log(error);
        });
    };
  };*/

  private getUniList() {

   this.menteeService.getAllUniversities().subscribe(tests => {
     this.universities = tests
     const result = [];
     const mapUniversities = new Map();
     for (const item of tests) {
         if(!mapUniversities.has(item.name)){
             mapUniversities.set(item.name, item.name);    // set any value to Map
             result.push({
                  id: item.id,
                 name: item.name
             });
         };

       };
       this.universities = result;
       console.log(this.universities);

   });
 }


}
