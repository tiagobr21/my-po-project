import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoXmlDocComponent } from './emissao-xml-doc.component';

describe('EmissaoXmlDocComponent', () => {
  let component: EmissaoXmlDocComponent;
  let fixture: ComponentFixture<EmissaoXmlDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissaoXmlDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissaoXmlDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
