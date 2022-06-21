import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmBoxDetailsComponent } from './display-em-box-details.component';

describe('DisplayEmBoxDetailsComponent', () => {
  let component: DisplayEmBoxDetailsComponent;
  let fixture: ComponentFixture<DisplayEmBoxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEmBoxDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmBoxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
