import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common'
import { ExamsApiService } from '../../exams/exams-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mentee-test',
  templateUrl: './mentee-test.component.html',
  styleUrls: ['./mentee-test.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenteeTestComponent {
  public dateTime:any= Date();
  // Min moment: April 12 2000
  public min = new Date(2000, 3, 12);
  // Max moment: April 25 2025
  public max = new Date(2025, 3, 25);

  todo : FormGroup; // accessible from template, cannot be private
  private readonly API_URL = 'http://brasa-pre.herokuapp.com';
  //private readonly API_URL = 'http://localhost:5000';
  public scoresArray:any=[];
  private headers: HttpHeaders;
  //public categories: Exam[];
  public categoria = new FormControl();
  //public categories: string[] = ['teste', 'teste2'];
  public categories: Exam[] =[];
  public subCategories: Exam[]=[];
  form: FormGroup;
  settingsCategory = {};
  settingsSubCategory = {};
  public category : Exam;
  public subCategory: Exam;
  @Input() score: any;
  public myDate:any = Date();
  public menteeId:any;

  examsListSubs: Subscription;
  examsList: Exam[];

 AddScore(){
   this.scoresArray.push({'category':'','subCategory':'', 'score': ''});
 };
 RemoveScore(idx){
   this.scoresArray.splice(idx, 1);
 };


  constructor( private fb: FormBuilder,
               private http: HttpClient,
               private getMentee: HttpClient,
               private menteeService: MenteeService,
             private route: ActivatedRoute,
           public datepipe: DatePipe
           ) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });
    this.todo = this.fb.group({
      categoryName: '',
      subCategoryName: '',
      score: '',
      dateInput:''
    });
    this.getExams();
    this.menteeId = this.route.snapshot.paramMap.get('id');
    console.log(this.category)

    this.settingsSubCategory = {
      singleSelection: true,
      text: "Categoria",
      enableSearchFilter: true,
      lazyLoading: true,
      labelKey: 'subcategory',
      primaryKey: 'subcategory',
      classes: "myclass custom-class",
      disabled: true
    };

    this.settingsCategory = {
      singleSelection: true,
      text: "Prova",
      enableSearchFilter: true,
      lazyLoading: true,
      labelKey: 'category',
      primaryKey: 'category',
      classes: "myclass custom-class"
    };
  }

  onCategorySelect(item: any) {
    console.log(item.category)
    this.getSubcategories(item.category)
    this.settingsSubCategory = {
      singleSelection: true,
      text: "Categoria",
      enableSearchFilter: true,
      lazyLoading: true,
      labelKey: 'subcategory',
      primaryKey: 'subcategory',
      classes: "myclass custom-class",
      disabled: false
    };
  }
  OnItemDeSelect(item: any) {
    this.settingsSubCategory = {
      singleSelection: true,
      text: "Categoria",
      enableSearchFilter: true,
      lazyLoading: true,
      labelKey: 'subcategory',
      primaryKey: 'subcategory',
      classes: "myclass custom-class",
      disabled: true
    };
  }


  public logForm(){
    console.log(this.score)
    // this.datepipe.transform(this.dateTime, 'dd-MM-yyyy') -> mudando formato da data
    console.log(this.datepipe.transform(this.dateTime, 'dd-MM-yyyy'), this.score, 'heyhey')

    this.menteeService.getAllExams().subscribe(tests => {
      console.log(tests);
      tests.forEach(prova=>{

        //console.log(prova.category,this.category.category)
        //console.log(prova.subcategory, this.subCategory.subcategory)
        if (prova.category == this.todo.value.categoryName[0].category && prova.subcategory == this.todo.value.subCategoryName[0].subcategory) {
          var provaId = prova.id
          /*
          this.http.post(`${this.API_URL}/exam_schedules/`,
            {
              "realization_date": this.datepipe.transform(this.dateTime, 'dd-MM-yyyy'),
                "mentee_id": this.menteeId,
                "exam_id": provaId,
                "score": this.score
            },
            {headers: this.headers}).subscribe(data => {
              console.log(data['_body']);
             }, error => {
              console.log(error);
            });*/

            this.getExams();
            delete this.todo.value.categoryName[0].category
            delete this.todo.value.subCategoryName[0].subcategory
          this.score = ''
          console.log(this.score, 'should be nothing')
          console.log(this.todo.value)
          this.todo.reset();
          this.todo.value.score = ''
          console.log(this.todo.value)
          this.dateTime = ''
          this.settingsSubCategory = {
            singleSelection: true,
            text: "Categoria",
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: 'subcategory',
            primaryKey: 'subcategory',
            classes: "myclass custom-class",
            disabled: true
          };
        }
      })
    });
/*
    for (let i =0; i< this.scoresArray.length; i++){
      this.http.post(`${this.API_URL}/exams`, this.scoresArray[i], {headers: this.headers}).subscribe(data => {
          console.log(data['_body']);
         }, error => {
          console.log(error);
        });
    };*/


  };


  private getExams() {
   this.menteeService.getAllExams().subscribe(tests => {
     this.categories = tests
     this.subCategories = tests
     const resultCategory = [];
     const resultSubCategory = [];
     const mapCategory = new Map();
     const mapSubCategory = new Map();
     for (const item of tests) {
         if(!mapCategory.has(item.category)){
             mapCategory.set(item.category, item.category);    // set any value to Map
             resultCategory.push({
                 category: item.category
             });
             console.log(mapCategory)
         };
         if(!mapSubCategory.has(item.subcategory)){
             mapSubCategory.set(item.subcategory, item.subcategory);    // set any value to Map
             resultSubCategory.push({
                 subcategory: item.subcategory
             });
         }
       };
       this.categories = resultCategory
       this.subCategories = resultSubCategory
       console.log(this.subCategories, this.categories)
       console.log(this.subCategory, this.category)
       /*
     tests.forEach((element)=>{
       console.log(element)
       console.log(element.category)

       this.categories.push({categoryValue: element.category})
       console.log(this.categories, '11')
     })*/
   });
 }

 public getSubcategories(categorySent) {
   console.log(categorySent, '3434')
   this.menteeService.getAllExams().subscribe(tests => {
     console.log(tests)
     this.subCategories = tests
     const resultSubCategory = [];
     const mapSubCategory = new Map();
     for (const item of tests) {
       console.log(item.category)
       if (item.category == categorySent){
         if(!mapSubCategory.has(item.subcategory)){
             mapSubCategory.set(item.subcategory, item.subcategory);    // set any value to Map
             resultSubCategory.push({
                 subcategory: item.subcategory
             });
         }
       }

       };
       this.subCategories = resultSubCategory
     /*
     tests.forEach((element)=>{
       console.log(element)
       console.log(element.category)

       this.categories.push({categoryValue: element.category})
       console.log(this.categories, '11')
     })*/
   });
 };

 /*portChange(event: { component: SelectSearchableComponent, value: any }) {
    console.log('port:', event.value);
  }*/


}
