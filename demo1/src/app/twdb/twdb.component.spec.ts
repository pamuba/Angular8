import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwdbComponent } from './twdb.component';

describe('TwdbComponent', () => {
  let component: TwdbComponent;
  let fixture: ComponentFixture<TwdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
