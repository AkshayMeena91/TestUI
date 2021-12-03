import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor() {}

  getPosts() {
    return [
        {
            name: "Vivek"
        }
    ]
  }

  addPost(task: Task) {

  }
}