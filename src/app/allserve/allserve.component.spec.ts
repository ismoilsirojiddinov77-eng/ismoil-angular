import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllserveComponent } from './allserve.component';

describe('AllserveComponent', () => {
  let component: AllserveComponent;
  let fixture: ComponentFixture<AllserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
