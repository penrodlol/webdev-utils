import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksHeaderComponent } from './links-header.component';

describe('LinksHeaderComponent', () => {
  let component: LinksHeaderComponent;
  let fixture: ComponentFixture<LinksHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
