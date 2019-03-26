import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SankCarouselComponent } from './sank-carousel.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [SankCarouselComponent],
  imports: [
    CommonModule,
    OwlModule
  ],
  exports: [SankCarouselComponent]
})
export class NgLibSankCarouselModule { }
