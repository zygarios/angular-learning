import { Component, ChangeDetectionStrategy } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private myPosts: Array<Post>;

  constructor(private httpService: HttpService) {}

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      this.myPosts = posts;
    });
  }

  getPost() {
    this.httpService.getPost(1).subscribe(res => {
      console.log(res);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(res => {
      console.log(res);
    });
  }

  addPost() {
    const post: Post = {
      userId: 1,
      id: null,
      title: "Mój post",
      body: "Pierwszy post o Angularze"
    };
    this.httpService.addPost(post).subscribe(res => {
      console.log(res);
    });
  }

  updatePost() {
    const p: Post = {
      userId: 1,
      id: 1,
      title: "A sante sana sin banana, wili buru mija mana"
      // body: "dupcia"
    };
    this.httpService.updatePost(p).subscribe(res => console.log(res));
  }

  deletePost() {}
  changePost() {
    const p: Post = {
      id: 1,
      body: "zmieniam tylko wpis"
    };
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
