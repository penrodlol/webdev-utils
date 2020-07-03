import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideLinksComponent } from './hide-links.component';

describe('HideLinksComponent', () => {
  let component: HideLinksComponent;
  let fixture: ComponentFixture<HideLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
