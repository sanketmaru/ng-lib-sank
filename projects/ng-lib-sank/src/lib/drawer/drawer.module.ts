import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DrawerComponent } from './drawer.component';
import { DrawerItemComponent } from './drawer-item/drawer-item.component';

@NgModule({
  declarations: [DrawerComponent, DrawerItemComponent],
  entryComponents: [DrawerItemComponent],
  imports: [
    CommonModule
  ],
  exports: [DrawerComponent, DrawerItemComponent]
})
export class DrawerModule { }

export * from './drawer-item/drawer-item-config';
export * from './drawer-item/drawer-item.component';