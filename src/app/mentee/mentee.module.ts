import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MenteeService } from './shared/mentee.service';
import { MenteeComponent } from './mentee/mentee.component';
import { MenteeCollegeComponent } from './mentee-college/mentee-college.component';
import { MenteeTestComponent } from './mentee-test/mentee-test.component';
import { MenteeEssayComponent } from './mentee-essay/mentee-essay.component';
import { MenteeInformationComponent } from './mentee-information/mentee-information.component';
import { MenteeListingComponent } from './mentee-listing/mentee-listing.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MenteeService
  ],
  declarations: [
    MenteeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenteePageModule {}
