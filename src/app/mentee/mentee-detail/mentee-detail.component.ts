import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { MenteeService } from '../shared/mentee.service';
import { Mentee } from '../shared/mentee.model'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Location} from '@angular/common';
import * as Auth0 from 'auth0-web';
import { University } from '../shared/university';

@Component({
  selector: 'app-mentee-detail',
  templateUrl: './mentee-detail.component.html',
  styleUrls: ['./mentee-detail.component.css']
})
export class MenteeDetailComponent {
  public todo : FormGroup;
  private readonly API_URL = 'https://brasa-pre.herokuapp.com/api';
  public satArray:any=[];
  public scoresArray:any=[];
  public satSubjectsArray:any=[];
  public headers: HttpHeaders;
  public menteeProfile:any=[];
  public menteeId:any;
  public menteeDados:any=[];
  public userNickname:any;
  public role:any;
  public username:any;
  @Input() public selectedUnis: University[] = new Array();

  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private getMentee: HttpClient,
    private menteeService: MenteeService,
    private route: ActivatedRoute,
    private _location: Location) {


    //this.headers = new HttpHeaders({'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    //"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    //});

    this.headers = new HttpHeaders({'Authorization': `Bearer ${Auth0.getAccessToken()}`
    });

    this.userNickname = Auth0.getProfile().nickname;
    this.menteeDados.push({first_name: '',
    last_name: '',
    city:'',
    state:'',
    financial_aid:'',
    primary_contact_email: ''
    })
    this.todo = this.formBuilder.group({});

    this.menteeId = this.route.snapshot.paramMap.get('id');
    this.getInformation();
    this.getUsername(this.userNickname)
    this.getUserId(this.menteeId)
    /*this.getMentee.get(`${this.API_URL}/mentees`).subscribe(data => {
      this.todo.value.username = data["objects"][0].username
        //"username": data["objects"][0].username,
      //this.menteeProfile.push(data['heroesUrl']),
      //this.menteeProfile.push(data['textfile'])
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });*/
  }

  static buildHttpOptions(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      }),
    };
    return httpOptions;
  }

  getUserId(id){
    this.menteeService.getMentee(id).subscribe(mentee=>{
      console.log(mentee.username)
      this.username = mentee.username
    })
  }

  getUsername(username) {
    this.menteeService.getUser(username).subscribe(usuario=>{
      this.role = usuario.role_name
      //this.username = usuario.username
    });
  }

  public getInformation(){
    this.menteeService.getMentee(this.menteeId).subscribe(mentee=>{
      this.menteeDados = {
        first_name: mentee.first_name,
        last_name: mentee.last_name,
        city: mentee.city,
        state: mentee.state,
        financial_aid: mentee.financial_aid,
        universities: mentee.universities,
        primary_contact_email: mentee.primary_contact.email

      };
    });

    this.menteeService.getMenteeCollegeList(this.menteeId).subscribe(colleges=>{
      colleges['objects'].forEach(college=>{
        this.selectedUnis.push({name: college.university.name});
      })

    });
  }

  public goBack() {
   this._location.back();
 }

  public logForm(){


    this.http.put(`${this.API_URL}/mentees/` + this.menteeId
      , {
      "first_name": this.menteeDados.first_name,
      "last_name": this.menteeDados.last_name,
      "city": this.menteeDados.city,
      "state": this.menteeDados.state,
      //"email": this.todo.value.email
      "financial_aid": this.menteeDados.financial_aid,
      "universities": this.menteeDados.universities
    }, {headers: this.headers, observe: "response"}).toPromise().then((data) => {
      if (data.status == 200) {

        this._location.back();
        //this.navCtrl.goBack("/tabs/mentee/listing/1");
      }
      }).catch(err=> { console.log(err) })
      /*, error => {
        console.log(error);
      });*/



    /*for (let i =0; i< this.scoresArray.length; i++){
      this.http.post(`${this.API_URL}/exams`, this.scoresArray[i], {headers: this.headers}).subscribe(data => {
          console.log(data['_body']);
         }, error => {
          console.log(error);
        });
    };*/


  }

  //mentee: Mentee;

  /*constructor(private route: ActivatedRoute,
              private menteeService: MenteeService,
              private loaderService: LoaderService,
              private alertSerice: AlertService) { }*/

    /*ionViewWillEnter() {
    const menteeId = this.route.snapshot.paramMap.get('menteeId');
    this.loaderService.presentLoading();
    this.menteeService.getMenteeById(menteeId).subscribe(
      (mentee: Mentee[]) => {
        this.mentee = mentee.map((mentee: Mentee) => {
          mentee.text = this.menteeService.replaceMenteeTextLine(mentee.text);
          return mentee;
        })[0];
        this.loaderService.dismissLoading();
    });
  }
  */
  /*
  updateImage() {
    this.mentee.img = 'assets/image/DefaultMentee.png'
  }
  */

}
