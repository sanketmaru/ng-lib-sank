import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public item: ImageData;

  constructor() { }

  ngOnInit() {
    console.log('item',this.item);
  }

}
