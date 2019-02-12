import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';


@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
    postForm : FormGroup;

    constructor(private fb : FormBuilder,
                private postService : PostService,
                private router : Router) {
    }

    ngOnInit() {
        this.postForm = this.fb.group({
            title: '',
            content: ''
        });
    }

    onSubmit() {
        const post = this.postForm.value;
        this.postService.createPost(post)
            .then(() => this.router.navigate(['posts']));
    }

}
