import { Component } from '@angular/core';

enum View {
  GRID = 'grid',
  CAROUSEL = 'carousel'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imagesData = [];
  public view: string = View.CAROUSEL;
  constructor() {
    this.imagesData = [{
      title: 'Image 1',
      description: 'Image 1 desc',
      image: 'https://www.isoi.edu.pk/system/files/node_gallery/13997705508_a218e00c81_b_1.jpeg'
    }, {
      title: 'Image 1',
      description: 'Image 1 desc',
      image: 'https://www.isoi.edu.pk/system/files/node_gallery/sample1_l_1.jpeg'
    }];
  }

  public isCarouselView() {
    return this.view === View.CAROUSEL;
  }

  public isGridView() {
    return this.view === View.GRID;
  }

  public setViewToCarousel() {
    this.view = View.CAROUSEL;
  }

  public setViewToGrid() {
    this.view = View.GRID;
  }
}
