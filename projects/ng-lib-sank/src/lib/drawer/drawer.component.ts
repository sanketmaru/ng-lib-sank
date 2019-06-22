import { Component, Input, OnInit, ViewChild,
  ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DrawerConfig } from './drawer-item/drawer-item-config';

@Component({
  selector: 'common-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() public components: DrawerConfig[] = [];

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;


  constructor(private resolver: ComponentFactoryResolver) { }

  public ngOnInit() {
    this.initComponents();
  }

  private initComponents(): void {
    if (!this.vc) {
      console.log('View container not found, components not loaded');
      return;
    }
    // clear existing view container and reload the components
    this.vc.clear();
    this.components.forEach( (sideNavComponent: DrawerConfig) => {
      const factory = this.resolver.resolveComponentFactory(sideNavComponent.type);
      const componentRef = this.vc.createComponent(factory);
      const component = componentRef.instance;
      component.data = sideNavComponent.data;
    });

  }

}
