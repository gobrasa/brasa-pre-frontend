import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamsApiService } from './exams/exams-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ExamFormComponent } from './exams/exam-form.component';
import { ExamsComponent } from './exams/exams.component';
import { RouterModule, Routes } from '@angular/router';
import * as Auth0 from 'auth0-web';
import {CallbackComponent} from './callback.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { MenteeCollegeComponent } from './mentee/mentee-college/mentee-college.component';
import { MenteeTestComponent } from './mentee/mentee-test/mentee-test.component';
import { MenteeEssayComponent } from './mentee/mentee-essay/mentee-essay.component';
import { MenteeInformationComponent } from './mentee/mentee-information/mentee-information.component';
import { MenteeListingComponent } from './mentee/mentee-listing/mentee-listing.component';
import { MentorListingComponent } from './mentor/mentor-listing/mentor-listing.component';
import { MentorInformationComponent } from './mentor/mentor-information/mentor-information.component';



const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'new-exam', component: ExamFormComponent },
  { path: 'exams', component: ExamsComponent , canActivate: [AuthGuard]},
  { path: 'mentee/listing', component: MenteeListingComponent },
  { path: 'mentee/listing/:id', component: MenteeInformationComponent },
  { path: 'mentor/listing', component: MentorListingComponent },
  { path: 'mentor/listing/:id', component: MentorInformationComponent },



  { path: '', component: HomeComponent },
  //{ path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    ExamsComponent,
    CallbackComponent,
    HomeComponent,
    //MentorComponent,
    MenteeListingComponent,
    MentorInformationComponent,
    MentorListingComponent,
    MenteeInformationComponent,
    MenteeEssayComponent,
    MenteeTestComponent,
    MenteeCollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'brasa-pre-app.eu.auth0.com',
      audience: 'https://online-exam.digituz.com',
      clientID: 'Qw4p5JyU5yO2dZ0DWPL27g9tq6P4c5kk',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile manage:exams'
    });
  }
}
