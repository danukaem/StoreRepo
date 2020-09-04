import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TestService1Service} from './services/test-service1.service';
import {CategoryComponent} from './component/category/category.component';
import {ImageComponent} from './component/image/image.component';
import {ProductComponent} from './component/product/product.component';
import {HeaderComponent} from './component/header/header.component';
import {BodyComponent} from './component/body/body.component';
import {HomePageComponent} from './component/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomePageComponent,
    CategoryComponent,
    ImageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TestService1Service],
  bootstrap: [AppComponent]
})
export class AppModule {
  static resourceBaseURL = 'http://localhost:8080/';
}
