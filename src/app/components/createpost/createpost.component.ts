import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

 
isShown: boolean = false ; // hidden by default
@Output() onAddPost: EventEmitter<any> = new EventEmitter();


text = '';
posts = [];

toggleShow() {

this.isShown = ! this.isShown;

}
  constructor(postService: PostsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    const newPost = {
      text: this.text
    };

    this.onAddPost.emit(newPost);

  }
  


}
