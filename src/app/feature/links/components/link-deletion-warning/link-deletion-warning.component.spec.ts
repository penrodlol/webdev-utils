import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDeletionWarningComponent } from './link-deletion-warning.component';

describe('LinkDeletionWarningComponent', () => {
  let component: LinkDeletionWarningComponent;
  let fixture: ComponentFixture<LinkDeletionWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDeletionWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDeletionWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
