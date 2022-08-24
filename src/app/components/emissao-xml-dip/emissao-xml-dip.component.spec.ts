import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoXmlDipComponent } from './emissao-xml-dip.component';

describe('EmissaoXmlDipComponent', () => {
  let component: EmissaoXmlDipComponent;
  let fixture: ComponentFixture<EmissaoXmlDipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissaoXmlDipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissaoXmlDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
