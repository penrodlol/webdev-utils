import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrettyTreeComponent } from './json-pretty-tree.component';

describe('JsonPrettyTreeComponent', () => {
  let component: JsonPrettyTreeComponent;
  let fixture: ComponentFixture<JsonPrettyTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPrettyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrettyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
