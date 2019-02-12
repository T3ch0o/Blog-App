import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../../core/models/post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    posts : Observable<Post[]>;

    constructor(private postService : PostService) {
    }

    ngOnInit() {
        this.posts = this.postService.getPosts();
    }
}
