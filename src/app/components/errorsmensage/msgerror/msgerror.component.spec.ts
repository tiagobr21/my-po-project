import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgerrorComponent } from './msgerror.component';

describe('MsgerrorComponent', () => {
  let component: MsgerrorComponent;
  let fixture: ComponentFixture<MsgerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
