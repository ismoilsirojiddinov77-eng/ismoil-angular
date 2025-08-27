import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbzorComponent } from './abzor.component';

describe('AbzorComponent', () => {
  let component: AbzorComponent;
  let fixture: ComponentFixture<AbzorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbzorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
