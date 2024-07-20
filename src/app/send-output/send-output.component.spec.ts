import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOutputComponent } from './send-output.component';

describe('SendOutputComponent', () => {
  let component: SendOutputComponent;
  let fixture: ComponentFixture<SendOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
