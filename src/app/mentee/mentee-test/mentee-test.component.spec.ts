import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeTestComponent } from './mentee-test.component';

describe('MenteeTestComponent', () => {
  let component: MenteeTestComponent;
  let fixture: ComponentFixture<MenteeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
