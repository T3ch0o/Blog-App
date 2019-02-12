import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    like = faThumbsUp;
    dislike = faThumbsDown;

  constructor() { }

  ngOnInit() {
  }
}
