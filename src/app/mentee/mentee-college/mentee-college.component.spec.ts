import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeCollegeComponent } from './mentee-college.component';

describe('MenteeCollegeComponent', () => {
  let component: MenteeCollegeComponent;
  let fixture: ComponentFixture<MenteeCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
