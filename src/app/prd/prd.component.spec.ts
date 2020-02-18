import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRDComponent } from './prd.component';

describe('PRDComponent', () => {
  let component: PRDComponent;
  let fixture: ComponentFixture<PRDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
