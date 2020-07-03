import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideLinksComponent } from './server-side-links.component';

describe('ServerSideLinksComponent', () => {
  let component: ServerSideLinksComponent;
  let fixture: ComponentFixture<ServerSideLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSideLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSideLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
