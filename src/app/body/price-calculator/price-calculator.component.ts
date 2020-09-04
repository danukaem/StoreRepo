import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../../../model/Product';
import {AppModule} from '../../app.module';
import {TestService1Service} from '../../services/test-service1.service';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.css']
})
export class PriceCalculatorComponent implements OnInit {
  calculatedPrice: any;
  products: Product[];

  selectedProductId: any;
  selectedType: string;
  quantity: any;

  constructor(private http: HttpClient, private testService: TestService1Service) {
  }

  ngOnInit() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getProducts', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.products = response.body;
      this.selectedProductId = response.body[0].productId;
    });
  }

  calculatePrice() {
    if (this.selectedType !== null && this.quantity > 0) {
      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
      const orderRequestMessage = {
        productId: this.selectedProductId,
        selectionQuantityType: this.selectedType,
        quantity: this.quantity
      };
      this.http.post<any>(`${AppModule.resourceBaseURL}` + 'getPrice', orderRequestMessage,
        {
          observe: 'response',
          headers
        }
      ).subscribe(response => {
        this.calculatedPrice = response.body;
      });
    } else {
      alert('please select options');
    }


  }

  selectType(selectedType) {
    this.selectedType = selectedType;
  }

  selectProduct(productId) {
    this.selectedProductId = productId;
  }

  quantityChange(value: string) {
    this.quantity = value;
  }

  addStudentToList() {
    this.testService.addStudent("kasun",26);
  }

  deleteStudentFromList() {
    this.testService.deleteStudent("kosala",26);

  }
}
