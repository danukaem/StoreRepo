import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryIdVal: any;
  categoryNameVal: any;
  categoryDescriptionVal: any;
  categories: Category[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.generateCategoryId();
    this.getcategoryList();

  }

  generateCategoryId() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getGeneratedCategoryId', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.categoryIdVal = response.body;
    }, error1 => {
      alert('error')
    });
  }

  addCategory(categoryId, categoryName, categoryDescription) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    const category = {
      categoryId,
      categoryName,
      categoryDescription
    };

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'addCategory', category, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.generateCategoryId();
      this.getcategoryList();
      alert(response.body.categoryName + ' Category save successfully');
    });
  }

  removeCategory(categoryId) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.delete<any>(`${AppModule.resourceBaseURL}` + 'deleteCategory/' + categoryId, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.generateCategoryId();
      this.getcategoryList();

      alert(response.body.categoryName + ' Category was deleted successfully');
    });
  }

  getcategoryList() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'getAllCategories', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.categories = response.body;
    }, error1 => {
      alert('error')
    });
  }

}
