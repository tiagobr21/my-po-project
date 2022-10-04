import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosIndividuaisComponent } from './dados-individuais.component';

describe('DadosIndividuaisComponent', () => {
  let component: DadosIndividuaisComponent;
  let fixture: ComponentFixture<DadosIndividuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosIndividuaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosIndividuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
