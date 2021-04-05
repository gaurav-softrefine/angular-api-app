import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonData: any;
  url = 'https://jsonplaceholder.typicode.com/users'


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJson()
  }


  getJson() {
    return this.http.get(this.url).subscribe((devicesArray) => {
      this.jsonData = devicesArray;

    });
  }

}


