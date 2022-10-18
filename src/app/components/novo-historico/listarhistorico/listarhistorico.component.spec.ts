import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarhistoricoComponent } from './listarhistorico.component';

describe('ListarhistoricoComponent', () => {
  let component: ListarhistoricoComponent;
  let fixture: ComponentFixture<ListarhistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarhistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarhistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
