import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts().subscribe((res) => {
      this.posts = res['posts'];
      for(let post of this.posts) {
        post.createdDate = (new Date(post.createdAt)).toLocaleDateString();;
      }
    }, (err) => {
      console.log(err); //Will be adding toastr in future
    });
  }

  getPosts() {
    let url = 'http://localhost:4300/feed/posts'
    return this.http.get(url);
  }

}
