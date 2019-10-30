This blog posts talks about creation of SideNav Navigations using Dynamic Components In Angular. 

Creation of dynamic components involves using Angular Dynamic Components and also using Typescript's Generic feature. 

Before we begin with the tutorial, we need to understand what are dynamic components and using Generics in Typescript language. 

---
**Dynamic Components**

Dynamic components are the one's which are not defined in any Angular template or inside any Angular component template. They are instantiated at run time.

If they are not required in any Angular Template, then you might think they should not be declared in the components array of module, so they are not available in build. 

Correct, Angular defines this components to be declared in entryComponents, so they are available in build and gets instantiated at run time.

More information about entry components [here](https://angular.io/guide/entry-components)

---
**Generics**


We will understand Generics with an example. Consider below class in Typescript

```javascript
  class Stack {
    public arr = [];
    public push(item: any) {
      // code
    }
    public pop(): any {
      // code
    }
  }

  class StackConsumer {
    const stack = new Stack();
    stack.push(2);
    stack.push('hello');
    stack.pop(); // Type here can be number, string, object depending upon the popped item
  }
```
The problem here is that consumer can push any type of items and popped item can be a string, number, object. 

Here is where Generics help us to define the Type of the Class with a parameter T. 

```javascript
  class Stack<T> {
    public arr: T[] = [];
    public push(item: T) {
      // code
    }
    public pop(): T {
      // code
    }
  }
  class StackConsumer {
    const stack = new Stack<number>();
    stack.push(2);
    stack.push('hello'); // not allowed
    stack.pop(); // Type here can be number only
  }
```

Here we have enforce the Type of the class and its member and we can create objects with the required type. 

To summarise, Generics help us to create classes or Components in Angular that can be used with variety of Types instead of using a single Type. 

*To know how you can use Generic Types with various Data Structure implementations visit [here](https://sanketmaru.github.io/dsa-gfg/file/src/queue/queue.ts.html#lineNumber5)* 

---

**Dynamic Drawer Component**

*Before creating any components and understanding how this works, its important to have a use case in front of use. 

It can be as simple as if user searching from a particular list and selecting one of the options which redirects him to a particular route and renders that sidenavigation option in sidenav.*


We will create a component using Angular Material [Sidenav](https://material.angular.io/components/sidenav/overview). This component will contain a sidenav container where all drawer items will be added. 

```html
<!-- drawer.component.html -->
<mat-sidenav-container class="sidenav-drawer">
    <mat-sidenav mode="side" opened>
        <ng-container #vc></ng-container>
    </mat-sidenav>
</mat-sidenav-container>
```

Next, we will create a drawer item which will be a simple div with the drawer name. 

```html
<!-- drawer-item.component.html -->
<div class="drawer-item">
    {{ name }}
</div>
```


We are ready with the basic components which will render the side navigations. Now to display name of navigation or pass the data we will make help of Generics and basic OOPS concepts.

First we will create an abstract class `DrawerBaseComponent` which contains the Type and data to be passed along.

```javascript
export abstract class DrawerBaseComponent<T = any> {
  public type: Type<T>;
  public data: T;
}
```

Now, lets create `DrawerItemComponent` which will extend above `DrawerBaseComponent` and accepts Generic parameter to accept any type. We have created a custom object of type `DrawerItemContent` which has a variable name.

```javascript

export interface DrawerItemContent {
  name: string;
}

export class DrawerItemComponent extends DrawerBaseComponent<DrawerItemContent> implements OnInit {
  public name: string;
  ngOnInit() {
    this.name = this.data.name;
  }
}
```

We will create an interface `DrawerConfig` which helps to create components with the particular config and also make sure that `DrawerConfig` only accepts components which extends `DrawerBaseComponent`, so components of any other types cannot be instantiated and enforces a type safety.

```javascript
export interface DrawerConfig<T extends DrawerBaseComponent = any> {
    // The type of the component to construct
    type: Type<T>;

    // The data can be anything passed by the implementor to configure the component.
    // The component would need data so html would render it.
    data: T;
}
```

Now, we will consume `DrawerConfig`, `DrawerItemComponent` in the app component where sidenav components will be used. 

We pass components as an Input Parameter to the drawer component. In `app.component.ts` we initialize the components as a DrawerConfig which has a type as DrawerItemComponent. 

```html
<!-- app.component.html -->
<common-drawer [components]="components"></common-drawer>
```

```javascript
// app.component.ts
public components: [DrawerConfig<DrawerItemComponent>, DrawerConfig<DrawerItemComponent>] = [
    {
      type: DrawerItemComponent,
      data: {
        name: 'First Component'
      }
    },
    {
      type: DrawerItemComponent,
      data: {
        name: 'Second Component'
      }
    }
];
```

Now inside drawer components when this components are loaded, they are dynamically created inside a view container.

It can be seen in the `drawer.component.html` above, we have used a `#vc` which is a view container where we will create the dynamic components. 

```javascript
private initComponents(): void {
    if (!this.vc) {
      console.log('View container not found, components not loaded');
      return;
    }
    // clear existing view container and reload the components
    this.vc.clear();
    this.components.forEach( (drawerComponent: DrawerConfig) => {
      const factory = this.resolver.resolveComponentFactory(drawerComponent.type);
      const componentRef = this.vc.createComponent(factory);
      const component = componentRef.instance;
      component.data = drawerComponent.data;
    });
  }
```

First we have checked if view container is present or not. Then for all the components received, we create factory using `resolveComponentFactory`. 

For creating a component factory we need to pass a component `Type` which is from `@angular/core`. This type is already present in `DrawerConfig` which is also extended by `DrawerBaseComponent`. 

We assign the data using component reference instance which contains the name as `First Component` and `Second Component`. 

This makes our task easier to define the side navigation components dynamically as we want. They will get destroyed and created depending upon the components you pass.

---
**Handle Routing**

Now we have basic application ready with the drawer items defined. To define the routing we will change the data passed to the `DrawerItemComponent`. 

```javascript
export interface DrawerItemContent {
  name: string;
  route: string;
  content$: Subject<string>;
}
```

Above `route` will be a route path and content$ is a subject which application will subscribe to whenever any drawer item is clicked. 

```javascript
goToRoute() {
  this.data.content$.next(this.data.route);
}
```
Once the sidenav is clicked we call the next of subject. 

This subject is created in our app which gets called whenever there is a change. 

```javascript
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
this.content$.subscribe( (data) => {
  console.log('data in app component', data);
  // handle the logic to route
  this.router.navigate([data]);
});
```

**Demo**

![](https://media.giphy.com/media/JQuboSZ1dwAsOBaS2U/giphy.gif)


**Source**

For simplicity, complete code is not defined in the blog.

The complete source code for the drawer component is created in a ng-library and can be found at [ng-lib-sank](https://github.com/sanketmaru/ng-lib-sank/tree/master/projects). 

This component is consumed in [angular-labs](https://github.com/sanketmaru/angular-labs), inside [app.component.ts](https://github.com/sanketmaru/angular-labs/blob/master/src/app/app.component.ts#L19).


Hope this helps you in understanding dynamic components and the use case of creating side navigation components on the fly.