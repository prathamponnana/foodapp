import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFoodOrderComponent } from './save-food-order.component';

describe('SaveFoodOrderComponent', () => {
  let component: SaveFoodOrderComponent;
  let fixture: ComponentFixture<SaveFoodOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFoodOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
