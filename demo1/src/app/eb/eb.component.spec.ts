import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbComponent } from './eb.component';

describe('EbComponent', () => {
  let component: EbComponent;
  let fixture: ComponentFixture<EbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
