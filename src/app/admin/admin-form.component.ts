import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExamsApiService} from "./admin-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'exam-form',
  template: `
    <mat-card>
      <h2>New Exam</h2>
        <mat-form-field class="full-width">
          <input matInput
                 placeholder="Category"
                 (keyup)="updateCategory($event)">
        </mat-form-field>

        <mat-form-field class="full-width">
          <input matInput
                 placeholder="Subcategory"
                 (keyup)="updateSubCategory($event)">
        </mat-form-field>

        <button mat-raised-button
                color="primary"
                (click)="saveExam()">
          Save Exam
        </button>
    </mat-card>
  `,
  styles: [`
    .exams-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .full-width {
      width: 100%;
    }
  `]
})
export class ExamFormComponent {
  exam = {
    category: '',
    subcategory: ''
  };

  constructor(private examsApi: ExamsApiService, private router: Router) { }

  updateCategory(event: any) {
    this.exam.category = event.target.value;
  }

  updateSubCategory(event: any) {
    this.exam.subcategory = event.target.value;
  }

  saveExam() {
    this.examsApi
      .saveExam(this.exam)
      .subscribe(
        () => this.router.navigate(['/admin']),
        error => alert(error.message)
      );
  }
}