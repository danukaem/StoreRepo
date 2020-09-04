import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../../model/Product';
import {AppModule} from '../app.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  productIdVal: any;
  productNameVal: any;
  unitsPerCartonVal: any;
  priceOfCartonVal: any;
  products: Product[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.generateProductId();

  }

  generateProductId() {
    this.productNameVal = ' ';
    this.unitsPerCartonVal = ' ';
    this.priceOfCartonVal = ' ';
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});

    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getGeneratedProductId', {
      observe: 'response',
      headers
    }).subscribe(response => {
      console.log('generated productId', response.body);
      this.productIdVal = response.body;
    });


    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getProducts', {
      observe: 'response',
      headers
    }).subscribe(response => {
      console.log('generated productId', response.body);
      this.products = response.body;
    });

  }

  addProduct(productId, productName, unitsPerCarton, priceOfCarton) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    const product = {
      productId,
      productName,
      noOfUnitsPerCarton: unitsPerCarton,
      priceOfCarton

    };

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'saveProduct', product, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.generateProductId();
      alert(response.body.productName + ' Product save successfully');
    });


  }

  removeProduct(productId) {

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.delete<any>(`${AppModule.resourceBaseURL}` + 'deleteProduct/' + productId, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.generateProductId();
      alert(response.body.productName + ' Product was deleted successfully');
    });
  }
}
