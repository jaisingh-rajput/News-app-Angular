import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryNewsComponent } from './Components/category-news/category-news.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'category-news',
    component:CategoryNewsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
