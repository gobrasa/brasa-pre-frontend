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
<<<<<<< HEAD
import { MenteeCollegeComponent } from './mentee/mentee-college/mentee-college.component';
import { MenteeTestComponent } from './mentee/mentee-test/mentee-test.component';
import { MenteeEssayComponent } from './mentee/mentee-essay/mentee-essay.component';
import { MenteeInformationComponent } from './mentee/mentee-information/mentee-information.component';
import { MenteeListingComponent } from './mentee/mentee-listing/mentee-listing.component';

=======
import { MenteeComponent } from './mentee/mentee.component';
import { MentorComponent } from './mentor/mentor.component';
>>>>>>> 52cf39b73d0caea323c23a2ec1c772efd1963dfd

const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'new-exam', component: ExamFormComponent },
<<<<<<< HEAD
  { path: 'exams', component: ExamsComponent , canActivate: [AuthGuard]},
  { path: 'mentee/listing', component: MenteeListingComponent },
  { path: 'mentee/listing/:id', component: MenteeInformationComponent },
  { path: '', component: HomeComponent },
=======
  { path: 'exams', component: ExamsComponent, canActivate: [AuthGuard]},
  { path: 'mentee', component: MenteeComponent, canActivate: [AuthGuard]},
  { path: 'mentor', component: MentorComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent },  
>>>>>>> 52cf39b73d0caea323c23a2ec1c772efd1963dfd
  //{ path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    ExamsComponent,
    CallbackComponent,
    HomeComponent,
<<<<<<< HEAD
    //MentorComponent,
    MenteeListingComponent,
    MenteeInformationComponent,
    MenteeEssayComponent,
    MenteeTestComponent,
    MenteeCollegeComponent
=======
    MenteeComponent,
    MentorComponent
>>>>>>> 52cf39b73d0caea323c23a2ec1c772efd1963dfd
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
