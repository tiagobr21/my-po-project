import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaodiscenteComponent } from './situacaodiscente.component';

describe('SituacaodiscenteComponent', () => {
  let component: SituacaodiscenteComponent;
  let fixture: ComponentFixture<SituacaodiscenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituacaodiscenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacaodiscenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
