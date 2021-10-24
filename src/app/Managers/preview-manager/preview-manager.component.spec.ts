import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewManagerComponent } from './preview-manager.component';

describe('PreviewManagerComponent', () => {
  let component: PreviewManagerComponent;
  let fixture: ComponentFixture<PreviewManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
