import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFoodDialogComponent } from './donate-food-dialog.component';

describe('DonateFoodDialogComponent', () => {
  let component: DonateFoodDialogComponent;
  let fixture: ComponentFixture<DonateFoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateFoodDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
