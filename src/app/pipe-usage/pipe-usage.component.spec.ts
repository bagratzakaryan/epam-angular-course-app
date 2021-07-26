import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeUsageComponent } from './pipe-usage.component';

describe('PipeUsageComponent', () => {
  let component: PipeUsageComponent;
  let fixture: ComponentFixture<PipeUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
