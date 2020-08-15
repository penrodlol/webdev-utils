import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromToolbarComponent } from './from-toolbar.component';

describe('FromToolbarComponent', () => {
  let component: FromToolbarComponent;
  let fixture: ComponentFixture<FromToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
