import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagersComponent } from './edit-managers.component';

describe('EditManagersComponent', () => {
  let component: EditManagersComponent;
  let fixture: ComponentFixture<EditManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
