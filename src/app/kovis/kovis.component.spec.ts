import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KovisComponent } from './kovis.component';

describe('KovisComponent', () => {
  let component: KovisComponent;
  let fixture: ComponentFixture<KovisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KovisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KovisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
