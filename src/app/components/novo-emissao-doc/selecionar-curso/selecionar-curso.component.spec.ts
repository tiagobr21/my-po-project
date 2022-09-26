import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarCursoComponent } from './selecionar-curso.component';

describe('SelecionarCursoComponent', () => {
  let component: SelecionarCursoComponent;
  let fixture: ComponentFixture<SelecionarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
