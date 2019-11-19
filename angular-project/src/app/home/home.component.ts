import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: AuthHttp) {
    http["http"]._defaultOptions.withCredentials = true;
 }

  ngOnInit() {
    this.getPosts().subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  getPosts() {
    let url = 'http://localhost:4300/feed/posts'
    return this.http.get(url).map(data => data.json());
  }

}
