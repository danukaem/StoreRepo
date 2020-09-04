import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../../../model/Product';
import {PriceWithQuantity} from '../../../model/PriceWithQuantity';
import {AppModule} from '../../app.module';
import {TestService1Service} from '../../services/test-service1.service';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {

  productPriceList: PriceWithQuantity[];
  minValue: any;
  maxvalue: any;
  productId: any;
  products: Product[];


  students=[];

  selectedProductId: any;

  constructor(private http: HttpClient, private testService: TestService1Service) {
  }

  ngOnInit() {
    this.students=this.testService.studentsList;

    // this.productId = 1;
    this.minValue = 1;
    // this.maxvalue = 20;
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});

    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getProducts', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.products = response.body;
      this.selectedProductId = response.body[0].productId;
    });


  }

  findPriceList() {
    this.productId = this.selectedProductId;
    this.minValue = 1;
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});

    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getPriceList/' + this.productId + '/' + this.minValue + '/' + this.maxvalue, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.productPriceList = response.body;
    });
  }

  selectProduct(productId) {

    this.selectedProductId = productId;
  }

  maxValueSelection(value: string) {
    this.maxvalue = value;
  }
}
