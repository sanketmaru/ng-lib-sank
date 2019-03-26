import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SankCardComponent } from './sank-card.component';

describe('SankCardComponent', () => {
  let component: SankCardComponent;
  let fixture: ComponentFixture<SankCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SankCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
