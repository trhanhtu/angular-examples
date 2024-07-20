import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveControlFlowComponent } from './directive-control-flow.component';

describe('DirectiveControlFlowComponent', () => {
  let component: DirectiveControlFlowComponent;
  let fixture: ComponentFixture<DirectiveControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
