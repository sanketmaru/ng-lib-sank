import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerConfig, DrawerItemComponent } from 'ng-lib-sank';
import { Subject } from 'rxjs';

enum View {
  GRID = 'grid',
  CAROUSEL = 'carousel'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imagesData = [];
  public view: string = View.CAROUSEL;
  public content$ = new Subject<string>();
  public components: [DrawerConfig<DrawerItemComponent>, DrawerConfig<DrawerItemComponent>] = [
    {
      type: DrawerItemComponent,
      data: {
        name: 'First Component',
        route: 'first',
        content$: this.content$
      }
    },
    {
      type: DrawerItemComponent,
      data: {
        name: 'Second Component',
        route: 'second',
        content$: this.content$
      }
    }
  ];
  constructor(private router: Router) {
    this.imagesData = [{
      title: 'Image 1',
      description: 'Image 1 desc',
      image: 'https://images.unsplash.com/photo-1558685160-140e422ea847?ixlib=rb-1.2.1&auto=format&fit=crop&w=2620&q=80'
    }, {
      title: 'Image 1',
      description: 'Image 1 desc',
      image: 'https://images.unsplash.com/photo-1558685160-140e422ea847?ixlib=rb-1.2.1&auto=format&fit=crop&w=2620&q=80'
    }];
    this.content$.subscribe( (data) => {
      console.log('data in app component', data);
      this.router.navigate([data]);
    });
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
