import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDeQuestionariosComponent } from './motor-de-questionarios.component';

describe('MotorDeQuestionariosComponent', () => {
  let component: MotorDeQuestionariosComponent;
  let fixture: ComponentFixture<MotorDeQuestionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorDeQuestionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorDeQuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
