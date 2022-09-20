import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFoodProductComponent } from './save-food-product.component';

describe('SaveFoodProductComponent', () => {
  let component: SaveFoodProductComponent;
  let fixture: ComponentFixture<SaveFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
