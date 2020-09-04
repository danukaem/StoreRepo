import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/Product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productIdVal: any;
  productNameVal: any;
  productDescriptionVal: any;
  products: Product[];
  categories: Category[];
  productCategories: Category[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.generateProductId();
    this.getProductList();
    this.productCategories = [];
  }

  generateProductId() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getGeneratedProductId', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.productIdVal = response.body;
    }, error1 => {
      alert('error')
    });

    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getAllCategories', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.categories = response.body;
    }, error1 => {
      alert('error')
    });

  }

  addProduct(productId, productName, productDescription) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    const product = {
      productId,
      productName,
      productDescription,
      categories: this.productCategories
    };

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'addProduct', product, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.generateProductId();
      this.getProductList();
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
      this.getProductList();

      alert(response.body.productName + ' Product was deleted successfully');
    });
  }

  getProductList() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getAllProducts', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.products = response.body;
    }, error1 => {
      alert('error')
    });
  }

  addCategoryToList(category) {
    console.log('*********category************* ', category);

    this.categories.forEach(cat => {
      if (cat.categoryId === category) {
        this.productCategories.push(cat);

      }
    });


  }
}
