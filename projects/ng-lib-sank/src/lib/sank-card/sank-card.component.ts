import { Component, OnInit, Input } from '@angular/core';
import { ImageData } from "./sank-card.model";
@Component({
  selector: 'sank-card',
  templateUrl: './sank-card.component.html',
  styleUrls: ['./sank-card.component.scss']
})
export class SankCardComponent implements OnInit {
  @Input() public item: ImageData;

  constructor() { }

  ngOnInit() {
    console.log('item',this.item);
  }

}
