import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmboxComponent } from './add-embox.component';

describe('AddEmboxComponent', () => {
  let component: AddEmboxComponent;
  let fixture: ComponentFixture<AddEmboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
