import { Component, OnInit, OnChanges,  EventEmitter, Input, Output, ChangeDetectorRef, NgZone } from '@angular/core';
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
import {Location} from '@angular/common';

@Component({
  selector: 'app-mentee-college',
  templateUrl: './mentee-college.component.html',
  styleUrls: ['./mentee-college.component.css']
})



export class MenteeCollegeComponent{
  private readonly API_URL = 'http://brasa-pre.herokuapp.com';
  //public collegeArray:any=[];
  private headers: HttpHeaders;
  public universities: University[] = [];
  //form: FormGroup;
  //port8Control: FormControl;
  //ports10Page = 2;
  //public category : University;
  menteeId: any;
  @Input() public selectedUnis: University[] = new Array();
  public selectedUnis1: University[]=[];
  public helper: University[]=[];
  public categoria = new FormControl();
  public categories: string[] = ['teste', 'teste2'];
  itemList = [];
  selectedItems = [];
  settings = {};
  public helper2 = 0;
  public helper3 = -1;
  userForm: FormGroup;
  loading = false;
  @Output() uniSelectedChange = new EventEmitter<any>();
/*
  ngOnInit() {
    this.menteeId = this.route.snapshot.paramMap.get('id');
    this.selectColleges(this.menteeId)
}
ngOnChanges() {
    if (this.userForm) {
      this.userForm.setValue(this.selectedUnis);
      console.log(this.userForm, 'updated')
    }
  }*/



  constructor( private formBuilder: FormBuilder,
               private http: HttpClient,
               private getMentee: HttpClient,
               private menteeService: MenteeService,
             private route: ActivatedRoute,
           private cd: ChangeDetectorRef,
           private zone:NgZone, private _location: Location  ) {



    this.headers = new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });
    this.userForm = this.formBuilder.group({
            uniList: []
        });

    this.getUniList(); // pegando todas universities

    this.menteeId = this.route.snapshot.paramMap.get('id');
    this.selectColleges(this.menteeId) //pegando college list do 'menteeId' para pré selecionar
    //this.selectedUnis1 = this.selectedUnis
    //let timer = of(this.selectColleges(this.menteeId)).delay(5000);
    //timer.subscribe(() => this.selectColleges(this.menteeId));
    console.log(this.selectedUnis, '00')

    console.log(this.userForm,'here')


    /*
    this.selectedUnis1.push({id: 693, name: "Seattle University"})
    this.selectedUnis1.push({id: 695, name: "Sewanee, University of the South"})
    this.selectedUnis1.push({id: 698, name: "Shippensburg University of Pennsylvania"})
    this.selectedUnis1.push({id: 696,name: "Shawnee State University"});/*
    console.log(this.selectedUnis1.constructor, '1')
    console.log(this.selectedUnis.constructor, '0')
    console.log(this.selectedUnis, this.selectedUnis1)*/

    this.settings = {
      singleSelection: false,
      text: "Select College List",
      enableFilterSelectAll: false,
      enableSearchFilter: true,
      lazyLoading: true,
      labelKey: "name",
      limitSelection: 20,
      classes: "myclass custom-class"
    };



  }





  onItemSelect(item: any) {
    this.helper3 = this.helper3+1
    //this.selectedUnis.push({id: 0, name: 'None'})
  }

  public goBack() {
   this._location.back();
 }

  OnItemDeSelect(item: any) {
    this.helper3= this.helper3-1
    //this.selectedUnis.pop()
  }


  public postCollegeList(){
    // pegando ids
    const universitiesId = [];
    this.userForm.value.uniList.forEach(test=>{
      universitiesId.push(test.id)
    });
    //console.log(universitiesId)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      })
    };


    this.http.post(`${this.API_URL}/university_application_for_mentee`,
      { mentee_id: this.menteeId,
        university_ids: universitiesId}, httpOptions).subscribe(data => {
        //console.log(data['_body']);
        this._location.back();
       }, error => {
        console.log(error);
        this._location.back();
      });
  };

  public async selectColleges(id){

    this.menteeService.getMenteeCollegeList(id).subscribe(tests=>{
      this.helper3 = tests.university_applications.length
      tests.university_applications.forEach(unis => {
        this.menteeService.getCollegeNameById(unis.university_id).subscribe(collegeName=>{
          this.selectedUnis.push({id: unis.university_id, name: collegeName.name});
        })
      })
      /*
      for (this.helper2; this.helper2< tests.university_applications.length;this.helper2++){
        console.log(this.helper2)
        console.log(tests.university_applications[this.helper2].university_id)
        this.menteeService.getCollegeNameById(tests.university_applications[this.helper2].university_id).subscribe(collegeName=>{
          if (this.helper2 < this.helper3){
            console.log('he')
          this.selectedUnis.push({id: tests.university_applications[this.helper2].university_id, name: collegeName.name});
          console.log(this.selectedUnis.length, this.helper3)}
        })

      }*/
      this.selectedUnis = this.helper

      return this.selectedUnis

      /*
      .forEach(unis => {
        console.log(unis, 'herere')
        this.menteeService.getCollegeNameById(unis.university_id).subscribe(collegeName=>{
          this.helper.push({id: unis.university_id, name: collegeName.name});
        })
      }).then(()=>{
        this.uniSelectedChange.emit(this.selectedUnis);
        this.cd.detectChanges();
        this.loading = true
        return this.selectedUnis, this.loading = true
      })*/



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
