import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLibSankComponent } from './ng-lib-sank.component';

describe('NgLibSankComponent', () => {
  let component: NgLibSankComponent;
  let fixture: ComponentFixture<NgLibSankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLibSankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLibSankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
