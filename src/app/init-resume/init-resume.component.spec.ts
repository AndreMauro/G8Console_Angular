import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitResumeComponent } from './init-resume.component';

describe('InitResumeComponent', () => {
  let component: InitResumeComponent;
  let fixture: ComponentFixture<InitResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
