import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineShoppingHeaderComponent } from './online-shopping-header.component';

describe('OnlineShoppingHeaderComponent', () => {
  let component: OnlineShoppingHeaderComponent;
  let fixture: ComponentFixture<OnlineShoppingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineShoppingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineShoppingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
