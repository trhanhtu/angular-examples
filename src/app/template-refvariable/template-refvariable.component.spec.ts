import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefvariableComponent } from './template-refvariable.component';

describe('TemplateRefvariableComponent', () => {
  let component: TemplateRefvariableComponent;
  let fixture: ComponentFixture<TemplateRefvariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRefvariableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateRefvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
