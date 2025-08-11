import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportClothesComponent } from './sport-clothes.component';

describe('SportClothesComponent', () => {
  let component: SportClothesComponent;
  let fixture: ComponentFixture<SportClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportClothesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
