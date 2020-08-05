import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePanelsComponent } from './compare-panels.component';

describe('ComparePanelsComponent', () => {
  let component: ComparePanelsComponent;
  let fixture: ComponentFixture<ComparePanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparePanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
