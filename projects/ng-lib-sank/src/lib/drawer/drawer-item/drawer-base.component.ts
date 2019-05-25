import { Type } from '@angular/core';

export abstract class DrawerBaseComponent<T = any> {
  public type: Type<T>;
  public context: T;
}
