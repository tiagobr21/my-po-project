import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDatasComponent } from './share-datas.component';

describe('ShareDatasComponent', () => {
  let component: ShareDatasComponent;
  let fixture: ComponentFixture<ShareDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
