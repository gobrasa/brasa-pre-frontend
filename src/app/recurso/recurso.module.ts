import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecursoPageModule {}
