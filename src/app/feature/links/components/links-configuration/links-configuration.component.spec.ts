import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksConfigurationComponent } from './links-configuration.component';

describe('LinksConfigurationComponent', () => {
  let component: LinksConfigurationComponent;
  let fixture: ComponentFixture<LinksConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
