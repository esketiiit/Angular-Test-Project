import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NavbarCmpComponent } from './navbar-cmp/navbar-cmp.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';


const routes: Routes = [
  {
    path: '',
    component: HomeCmpComponent
  },
  {
    path: 'test',
    component: NewCmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
