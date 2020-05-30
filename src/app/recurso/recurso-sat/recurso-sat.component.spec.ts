import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoSatComponent } from './recurso-sat.component';

describe('RecursoSatComponent', () => {
  let component: RecursoSatComponent;
  let fixture: ComponentFixture<RecursoSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoSatComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
