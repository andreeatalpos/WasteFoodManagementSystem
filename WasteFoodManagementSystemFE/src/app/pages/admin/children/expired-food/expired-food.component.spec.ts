import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredFoodComponent } from './expired-food.component';

describe('ExpiredFoodComponent', () => {
  let component: ExpiredFoodComponent;
  let fixture: ComponentFixture<ExpiredFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
