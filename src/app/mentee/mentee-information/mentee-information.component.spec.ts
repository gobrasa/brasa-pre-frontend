import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeInformationComponent } from './mentee-information.component';

describe('MenteeInformationComponent', () => {
  let component: MenteeInformationComponent;
  let fixture: ComponentFixture<MenteeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
