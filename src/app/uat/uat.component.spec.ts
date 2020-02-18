import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UATComponent } from './uat.component';

describe('UATComponent', () => {
  let component: UATComponent;
  let fixture: ComponentFixture<UATComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UATComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
