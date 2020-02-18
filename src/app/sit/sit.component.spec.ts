import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SITComponent } from './sit.component';

describe('SITComponent', () => {
  let component: SITComponent;
  let fixture: ComponentFixture<SITComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SITComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
