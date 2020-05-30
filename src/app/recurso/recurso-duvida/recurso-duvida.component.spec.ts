import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoDuvidaComponent } from './recurso-duvida.component';

describe('RecursoDuvidaComponent', () => {
  let component: RecursoDuvidaComponent;
  let fixture: ComponentFixture<RecursoDuvidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoDuvidaComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoDuvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
