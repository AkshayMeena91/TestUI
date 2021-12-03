import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


@Input() posts: any;
  constructor(private postService: PostsService) {}

  ngOnInit() {
    console.log(this.posts);
  }


  
}
