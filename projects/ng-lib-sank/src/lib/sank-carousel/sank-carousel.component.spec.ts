import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SankCarouselComponent } from './sank-carousel.component';

describe('SankCarouselComponent', () => {
  let component: SankCarouselComponent;
  let fixture: ComponentFixture<SankCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SankCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SankCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
