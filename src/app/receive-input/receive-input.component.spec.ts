import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveInputComponent } from './receive-input.component';

describe('ReceiveInputComponent', () => {
  let component: ReceiveInputComponent;
  let fixture: ComponentFixture<ReceiveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
