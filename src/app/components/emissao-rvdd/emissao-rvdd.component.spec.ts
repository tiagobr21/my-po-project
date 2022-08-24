import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoRvddComponent } from './emissao-rvdd.component';

describe('EmissaoRvddComponent', () => {
  let component: EmissaoRvddComponent;
  let fixture: ComponentFixture<EmissaoRvddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissaoRvddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissaoRvddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
