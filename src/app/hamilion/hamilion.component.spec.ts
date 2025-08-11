import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamilionComponent } from './hamilion.component';

describe('HamilionComponent', () => {
  let component: HamilionComponent;
  let fixture: ComponentFixture<HamilionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamilionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamilionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
