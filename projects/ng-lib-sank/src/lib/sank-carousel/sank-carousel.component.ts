import { Component, ContentChild, Input, TemplateRef, ViewChild, OnChanges } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { ImageData } from '../sank-card/sank-card.model';

@Component({
  selector: 'sank-carousel',
  templateUrl: './sank-carousel.component.html',
  styleUrls: ['./sank-carousel.component.css']
})
export class SankCarouselComponent implements OnChanges {
  @Input() public data: ImageData[]  = [];
  @ViewChild('owlElement') owlElement: OwlCarousel
  @ContentChild(TemplateRef) cardItemTmpl: TemplateRef<any>;
   
  constructor() {
    console.log(this.data);
  }

  public ngOnChanges() {
    console.log('on changes', this.data);
  }

  public onLeft(event) {
    this.owlElement.previous([200]);
  }

  public onRight(event) {
    this.owlElement.next([200]);
  }

}
