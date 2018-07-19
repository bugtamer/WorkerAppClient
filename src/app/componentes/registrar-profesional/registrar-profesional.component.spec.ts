import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProfesionalComponent } from './registrar-profesional.component';

describe('RegistrarProfesionalComponent', () => {
  let component: RegistrarProfesionalComponent;
  let fixture: ComponentFixture<RegistrarProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
