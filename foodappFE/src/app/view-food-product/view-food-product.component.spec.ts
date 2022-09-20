import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodProductComponent } from './view-food-product.component';

describe('ViewFoodProductComponent', () => {
  let component: ViewFoodProductComponent;
  let fixture: ComponentFixture<ViewFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
