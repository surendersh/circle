import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsRentSellingComponent } from './tips-rent-selling.component';

describe('TipsRentSellingComponent', () => {
  let component: TipsRentSellingComponent;
  let fixture: ComponentFixture<TipsRentSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsRentSellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsRentSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
