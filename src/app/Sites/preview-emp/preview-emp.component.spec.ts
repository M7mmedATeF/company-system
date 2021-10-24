import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEmpComponent } from './preview-emp.component';

describe('PreviewEmpComponent', () => {
  let component: PreviewEmpComponent;
  let fixture: ComponentFixture<PreviewEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
