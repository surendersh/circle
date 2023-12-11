import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailsContactComponent } from './property-details-contact.component';

describe('PropertyDetailsContactComponent', () => {
  let component: PropertyDetailsContactComponent;
  let fixture: ComponentFixture<PropertyDetailsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailsContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
