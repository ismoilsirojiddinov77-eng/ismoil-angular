import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoshlangichComponent } from './boshlangich.component';

describe('BoshlangichComponent', () => {
  let component: BoshlangichComponent;
  let fixture: ComponentFixture<BoshlangichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoshlangichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoshlangichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
