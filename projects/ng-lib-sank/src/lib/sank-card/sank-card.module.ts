import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SankCardComponent } from './sank-card.component';

@NgModule({
  declarations: [SankCardComponent],
  imports: [
    CommonModule
  ],
  exports: [SankCardComponent]
})
export class NgLibSankCardModule { }

export * from './sank-card.model';