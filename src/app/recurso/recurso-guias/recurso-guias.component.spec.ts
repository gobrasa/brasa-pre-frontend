import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoGuiasComponent } from './recurso-guias.component';

describe('RecursoGuiasComponent', () => {
  let component: RecursoGuiasComponent;
  let fixture: ComponentFixture<RecursoGuiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoGuiasComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
