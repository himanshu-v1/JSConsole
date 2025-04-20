import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSCComponent } from './jsc.component';

describe('JSCComponent', () => {
  let component: JSCComponent;
  let fixture: ComponentFixture<JSCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
