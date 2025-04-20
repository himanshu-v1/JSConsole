import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCComponent } from './html-c.component';

describe('HtmlCComponent', () => {
  let component: HtmlCComponent;
  let fixture: ComponentFixture<HtmlCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
