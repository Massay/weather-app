import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhetherCardComponent } from './whether-card.component';

describe('WhetherCardComponent', () => {
  let component: WhetherCardComponent;
  let fixture: ComponentFixture<WhetherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhetherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhetherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
