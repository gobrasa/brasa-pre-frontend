import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoVideosComponent } from './recurso-videos.component';

describe('RecursoVideosComponent', () => {
  let component: RecursoVideosComponent;
  let fixture: ComponentFixture<RecursoVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoVideosComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
