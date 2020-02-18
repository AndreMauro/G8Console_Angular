import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiesComponent } from './mies.component';

describe('MiesComponent', () => {
  let component: MiesComponent;
  let fixture: ComponentFixture<MiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
