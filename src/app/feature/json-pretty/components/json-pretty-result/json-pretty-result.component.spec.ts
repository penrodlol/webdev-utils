import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrettyResultComponent } from './json-pretty-result.component';

describe('JsonPrettyResultComponent', () => {
  let component: JsonPrettyResultComponent;
  let fixture: ComponentFixture<JsonPrettyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPrettyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrettyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
