import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscLinksComponent } from './misc-links.component';

describe('MiscLinksComponent', () => {
  let component: MiscLinksComponent;
  let fixture: ComponentFixture<MiscLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
