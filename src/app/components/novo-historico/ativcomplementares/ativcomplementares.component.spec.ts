import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivcomplementaresComponent } from './ativcomplementares.component';

describe('AtivcomplementaresComponent', () => {
  let component: AtivcomplementaresComponent;
  let fixture: ComponentFixture<AtivcomplementaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivcomplementaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtivcomplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
