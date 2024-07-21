import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContetProjectionMultiComponent } from './contet-projection-multi.component';

describe('ContetProjectionMultiComponent', () => {
  let component: ContetProjectionMultiComponent;
  let fixture: ComponentFixture<ContetProjectionMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContetProjectionMultiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContetProjectionMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
