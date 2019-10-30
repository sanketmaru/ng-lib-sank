import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';


const routes: Routes = [{
  path: 'first',
  component: FirstComponent
}, {
  path: 'second',
  component: SecondComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
