import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedoraComponent } from './mantenedora.component';

describe('MantenedoraComponent', () => {
  let component: MantenedoraComponent;
  let fixture: ComponentFixture<MantenedoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
