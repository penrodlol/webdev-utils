import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLinkComponent } from './add-edit-link.component';

describe('AddLinkComponent', () => {
  let component: AddEditLinkComponent;
  let fixture: ComponentFixture<AddEditLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
