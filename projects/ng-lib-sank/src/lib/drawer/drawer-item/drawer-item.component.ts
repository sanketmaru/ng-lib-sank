import { Component, OnInit } from '@angular/core';
import { DrawerBaseComponent } from './drawer-base.component';
import { Subject } from 'rxjs';

export interface DrawerItemContent {
  name: string;
  route: string;
  content$: Subject<string>;
}

@Component({
  selector: 'common-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss']
})
export class DrawerItemComponent extends DrawerBaseComponent<DrawerItemContent> implements OnInit {

  public name: string;

  ngOnInit() {
    this.name = this.data.name;
  }

  goToRoute() {
    this.data.content$.next(this.data.route);
  }

}
