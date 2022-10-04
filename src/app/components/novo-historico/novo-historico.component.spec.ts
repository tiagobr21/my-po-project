import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoHistoricoComponent } from './novo-historico.component';

describe('NovoHistoricoComponent', () => {
  let component: NovoHistoricoComponent;
  let fixture: ComponentFixture<NovoHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
