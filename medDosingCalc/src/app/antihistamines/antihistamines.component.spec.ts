import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntihistaminesComponent } from './antihistamines.component';

describe('AntihistaminesComponent', () => {
  let component: AntihistaminesComponent;
  let fixture: ComponentFixture<AntihistaminesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntihistaminesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntihistaminesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
