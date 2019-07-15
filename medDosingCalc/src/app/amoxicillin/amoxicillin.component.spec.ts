import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoxicillinComponent } from './amoxicillin.component';

describe('AmoxicillinComponent', () => {
  let component: AmoxicillinComponent;
  let fixture: ComponentFixture<AmoxicillinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmoxicillinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmoxicillinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
