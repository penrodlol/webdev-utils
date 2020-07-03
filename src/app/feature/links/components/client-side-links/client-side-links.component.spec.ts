import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSideLinksComponent } from './client-side-links.component';

describe('ClientSideLinksComponent', () => {
  let component: ClientSideLinksComponent;
  let fixture: ComponentFixture<ClientSideLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSideLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSideLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
