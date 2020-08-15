import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToToolbarComponent } from './to-toolbar.component';

describe('ToToolbarComponent', () => {
  let component: ToToolbarComponent;
  let fixture: ComponentFixture<ToToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
