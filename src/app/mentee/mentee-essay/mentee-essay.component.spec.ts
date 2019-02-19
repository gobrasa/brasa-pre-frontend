import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeEssayComponent } from './mentee-essay.component';

describe('MenteeEssayComponent', () => {
  let component: MenteeEssayComponent;
  let fixture: ComponentFixture<MenteeEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
