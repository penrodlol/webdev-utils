import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrettyActionsComponent } from './json-pretty-actions.component';

describe('JsonPrettyActionsComponent', () => {
  let component: JsonPrettyActionsComponent;
  let fixture: ComponentFixture<JsonPrettyActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPrettyActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrettyActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
