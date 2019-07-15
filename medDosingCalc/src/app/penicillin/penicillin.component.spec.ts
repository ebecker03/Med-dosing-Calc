import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenicillinComponent } from './penicillin.component';

describe('PenicillinComponent', () => {
  let component: PenicillinComponent;
  let fixture: ComponentFixture<PenicillinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenicillinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenicillinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
