import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveUsageComponent } from './directive-usage.component';

describe('DirectiveUsageComponent', () => {
  let component: DirectiveUsageComponent;
  let fixture: ComponentFixture<DirectiveUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
