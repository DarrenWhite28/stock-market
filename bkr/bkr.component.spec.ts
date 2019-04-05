import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BKRComponent } from './bkr.component';

describe('BKRComponent', () => {
  let component: BKRComponent;
  let fixture: ComponentFixture<BKRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BKRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BKRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
