import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService1Service {

  studentsList = [
    {
      name: 'danuka',
      age: 29
    },
    {
      name: 'samitha',
      age: 30
    },
    {
      name: 'kosala',
      age: 28
    }
  ]

  constructor() {
  }

  addStudent(name, age) {
    this.studentsList.push({name: name, age: age})
  }

  deleteStudent(kasun, age) {
    this.studentsList.pop({name: name, age: age});
  }
}
