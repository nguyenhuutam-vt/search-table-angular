import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-user',
  templateUrl: './json-user.component.html',
  styleUrls: ['./json-user.component.scss'],
})
export class JsonUserComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
  }
  constructor(private http: HttpClient) {}

  userArray: any[] = [];
  columnArray: any[] = [
    {
      header: 'Name',
      fieldName: 'name',
      dataType: 'string',
      pipe: 'titlecase',
    },
    {
      header: 'User Name',
      fieldName: 'username',
      dataType: 'string',
      pipe: 'titlecase',
    },
    {
      header: 'Email',
      fieldName: 'email',
      dataType: 'string',
      pipe: 'titlecase',
    },
    {
      header: 'Phone No',
      fieldName: 'phone',
      dataType: 'string',
      pipe: 'titlecase',
    },
    {
      header: 'Website',
      fieldName: 'website',
      dataType: 'string',
      pipe: 'titlecase',
    },
    {
      header: 'Date',
      fieldName: 'currentDate',
      dataType: 'date',
      pipe: 'titlecase',
    },
  ];

  getUser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.userArray = res;
        console.log(res);
        this.userArray.forEach((element) => {
          element.currentDate = new Date();
        });
      });
  }
  editUser(item: any) {
    console.log('edit');
  }
  deleteUser(item: any) {
    console.log('delete');
  }
}
