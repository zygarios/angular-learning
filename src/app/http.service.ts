import { Injectable } from "@angular/core";
import { Post } from "./app.component";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from "@angular/common/http";

const myUrl = "https://jsonplaceholder.typicode.com/posts/";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(myUrl);
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(myUrl + id);
  }
  getPostByUser(userId: number): Observable<Array<Post>> {
    const params = new HttpParams().set("userId", userId.toString());
    return this.http.get<Array<Post>>(myUrl, { params });
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(myUrl, post);
  }
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(myUrl + post.id, post);
  }
}
