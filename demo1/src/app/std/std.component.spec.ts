import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdComponent } from './std.component';

describe('StdComponent', () => {
  let component: StdComponent;
  let fixture: ComponentFixture<StdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
