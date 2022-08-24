import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentsComponent } from './listar-components.component';

describe('ListarComponentsComponent', () => {
  let component: ListarComponentsComponent;
  let fixture: ComponentFixture<ListarComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
