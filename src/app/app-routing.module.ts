import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PriceTableComponent} from './body/price-table/price-table.component';
import {PriceCalculatorComponent} from './body/price-calculator/price-calculator.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'price-table', component: PriceTableComponent},
  {path: 'price-calculator', component: PriceCalculatorComponent},
  {path: '**', component: HomePageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
