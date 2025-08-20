import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavatComponent } from './savat.component';

describe('SavatComponent', () => {
  let component: SavatComponent;
  let fixture: ComponentFixture<SavatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
