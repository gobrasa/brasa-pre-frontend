import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeListingComponent } from './mentee-listing.component';

describe('MenteeListingComponent', () => {
  let component: MenteeListingComponent;
  let fixture: ComponentFixture<MenteeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
