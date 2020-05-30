import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import * as Auth0 from 'auth0-web';
import {CallbackComponent} from './callback.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { MenteeCollegeComponent } from './mentee/mentee-college/mentee-college.component';
import { MenteeAcceptedComponent } from './mentee/mentee-accepted/mentee-accepted.component';
import { MenteeTestComponent } from './mentee/mentee-test/mentee-test.component';
import { MenteeEssayComponent } from './mentee/mentee-essay/mentee-essay.component';
import { MenteeAcceptanceComponent } from './mentee/mentee-acceptance/mentee-acceptance.component';
import { MenteeInformationComponent } from './mentee/mentee-information/mentee-information.component';
import { MenteeListingComponent } from './mentee/mentee-listing/mentee-listing.component';

import { AdminComponentEUA } from './admin-eua/admin.component';
import { AdminComponentEuropa } from './admin-europa/admin.component';
import { AdminComponentAnalytics } from './admin-analytics/admin.component';

import { MenteeDetailComponent } from './mentee/mentee-detail/mentee-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenteePageModule } from './mentee/mentee.module';
import { MentorPageModule } from './mentor/mentor.module';
import { RecursoPageModule } from './recurso/recurso.module';
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
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { DatePipe } from '@angular/common';

import { MentorListingComponent } from './mentor/mentor-listing/mentor-listing.component';
import { RecursoVideosComponent } from './recurso/recurso-videos/recurso-videos.component';
import { RecursoSatComponent } from './recurso/recurso-sat/recurso-sat.component';
import { RecursoFormComponent } from './recurso/recurso-form/recurso-form.component';
import { RecursoDuvidaComponent } from './recurso/recurso-duvida/recurso-duvida.component';
import { RecursoGuiasComponent } from './recurso/recurso-guias/recurso-guias.component';
import { MentorInformationComponent } from './mentor/mentor-information/mentor-information.component';
import { MentorDetailComponent } from './mentor/mentor-detail/mentor-detail.component';
import { MenteeComponent } from './mentee/mentee.component';
import { MentorComponent } from './mentor/mentor/mentor.component';
import { RecursoComponent } from './recurso/recurso/recurso.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AdminComponent } from './admin/admin.component';
import { environment } from '../environments/environment';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'mentee/listing', component: MenteeListingComponent },
  { path: 'mentee/test/:id', component: MenteeTestComponent },
  { path: 'mentee/essay/:id', component: MenteeEssayComponent },
  { path: 'mentee/acceptance/:id', component: MenteeAcceptanceComponent },
  { path: 'mentee/college/:id', component: MenteeCollegeComponent },
  { path: 'mentee/accepted/:id', component: MenteeAcceptedComponent},
  { path: 'mentee/detail/:id', component: MenteeDetailComponent },
  { path: 'mentee/listing/:id', component: MenteeInformationComponent },
  { path: 'mentor/listing', component: MentorListingComponent },
  { path: 'recurso/videos', component: RecursoVideosComponent },
  { path: 'recurso/sat', component: RecursoSatComponent },
  { path: 'recurso/form', component: RecursoFormComponent },
  { path: 'recurso/duvida', component: RecursoDuvidaComponent },
  { path: 'recurso/guias', component: RecursoGuiasComponent },
  { path: 'mentor/listing/:id', component: MentorInformationComponent },
  { path: 'mentor/detail/:id', component: MentorDetailComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'admin-eua', component: AdminComponentEUA},
  { path: 'admin-europa', component: AdminComponentEuropa},
  { path: 'admin-analytics', component: AdminComponentAnalytics},


  { path: '', component: HomeComponent },
  //{ path: '**', redirectTo: '' }

];

export const MY_NATIVE_FORMATS = {
    fullPickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
    datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
    timePickerInput: {hour: 'numeric', minute: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
};

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    //MentorComponent,
    MenteeListingComponent,
    MentorComponent,
    MentorInformationComponent,
    MentorListingComponent,
    RecursoVideosComponent,
    RecursoSatComponent,
    RecursoFormComponent,
    RecursoDuvidaComponent,
    RecursoGuiasComponent,
    MentorDetailComponent,
    RecursoComponent,
    MenteeComponent,
    MenteeInformationComponent,
    MenteeEssayComponent,
    MenteeAcceptanceComponent,
    MenteeTestComponent,
    MenteeEssayComponent,
    MenteeCollegeComponent,
    MenteeAcceptedComponent,
    MenteeDetailComponent,
    WelcomeComponent,
    AdminComponent,
    AdminComponentEUA,
    AdminComponentEuropa,
    AdminComponentAnalytics
  ],
  imports: [
    AngularMultiSelectModule,
    Ng2SearchPipeModule,
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
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
    MenteePageModule,
    MentorPageModule,
    RecursoPageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [ {provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS}, DatePipe],
  entryComponents: [MenteeTestComponent, MenteeCollegeComponent],
  bootstrap: [AppComponent, MenteeTestComponent, MenteeCollegeComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'brasa-pre-app.eu.auth0.com',
      audience: 'https://online-exam.digituz.com',
      clientID: 'Qw4p5JyU5yO2dZ0DWPL27g9tq6P4c5kk',
      //redirectUri: AWS_URL,
      redirectUri: environment.frontend_callback_url,
      scope: 'openid profile manage:exams'
    });
  }
}
