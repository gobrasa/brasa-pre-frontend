import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoComponent } from '../recurso/recurso.component';

describe('RecursoComponent', () => {
  let component: RecursoComponent;
  let fixture: ComponentFixture<RecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
