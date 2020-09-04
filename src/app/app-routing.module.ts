import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './component/category/category.component';
import {ImageComponent} from './component/image/image.component';
import {ProductComponent} from './component/product/product.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'image', component: ImageComponent},
  {path: 'product', component: ProductComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
