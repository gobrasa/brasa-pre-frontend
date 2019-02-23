import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorInformationComponent } from './mentor-information.component';

describe('MenteeInformationComponent', () => {
  let component: MentorInformationComponent;
  let fixture: ComponentFixture<MentorInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
