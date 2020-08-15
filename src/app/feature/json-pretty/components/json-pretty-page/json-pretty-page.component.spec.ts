import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrettyPageComponent } from './json-pretty-page.component';

describe('JsonPrettyPageComponent', () => {
  let component: JsonPrettyPageComponent;
  let fixture: ComponentFixture<JsonPrettyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPrettyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrettyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
