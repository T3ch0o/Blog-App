import { Component, Input, OnInit } from '@angular/core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() post : Post;
    date : string;
    heart = faHeart;
    heartBroke = faHeartBroken;

    constructor(private postService : PostService) {
    }

    ngOnInit() {
        this.date = new Date(this.post.creationDate).toLocaleDateString('en-US');
    }

    changePostStatus(type, post) {
        if (type === 'increase') {
            post.loveIts++;
            this.postService.updatePost(post, post.id);
        } else {
            post.loveIts--;
            this.postService.updatePost(post, post.id);
        }
    }

    remove(id) {
        this.postService.deletePost(id);
    }
}
