import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { IPost } from '../Shared Classes and types/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:IPost[];
  constructor(private postsService:PostsService) { 
    this.postsService.getAllPosts().subscribe(
      data=>
      {
      this.posts = data
      },
      err=>
      {
        console.log(err)
      }
    );
  }

  ngOnInit(): void {
  }

}
