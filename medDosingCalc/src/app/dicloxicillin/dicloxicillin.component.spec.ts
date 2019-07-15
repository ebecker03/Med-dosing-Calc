import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicloxicillinComponent } from './dicloxicillin.component';

describe('DicloxicillinComponent', () => {
  let component: DicloxicillinComponent;
  let fixture: ComponentFixture<DicloxicillinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicloxicillinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicloxicillinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
