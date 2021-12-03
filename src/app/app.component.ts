import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testUI';

  updatedPosts: any = [
    {
      text: 'Akshay1'
    },
    {
      text: 'Akshay2'
    }
  ];

  addPost(post: any) {
    this.updatedPosts.push(post);
    console.log(this.updatedPosts);
  }

}

