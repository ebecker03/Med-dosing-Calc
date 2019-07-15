import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentinComponent } from './augmentin.component';

describe('AugmentinComponent', () => {
  let component: AugmentinComponent;
  let fixture: ComponentFixture<AugmentinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugmentinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AugmentinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
