import { Type } from '@angular/core';
import { DrawerBaseComponent } from './drawer-base.component';
export interface DrawerConfig<T extends DrawerBaseComponent = DrawerBaseComponent> {
    // The type of the component to construct
    type: Type<T>;

    // The context can be anything passed by the implementor to configure the component. 
    // The component would need data so html would render it. 
    context: T['context'];
}
