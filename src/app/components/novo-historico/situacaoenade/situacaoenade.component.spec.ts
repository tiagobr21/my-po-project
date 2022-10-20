import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoenadeComponent } from './situacaoenade.component';

describe('SituacaoenadeComponent', () => {
  let component: SituacaoenadeComponent;
  let fixture: ComponentFixture<SituacaoenadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituacaoenadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacaoenadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
