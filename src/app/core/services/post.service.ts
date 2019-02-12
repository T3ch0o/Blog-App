import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private firestore : AngularFirestore) {
    }

    getPosts() {
        return this.firestore.collection('posts').snapshotChanges().pipe(
            map(action => action.map(post => {
                const data = post.payload.doc.data() as Post;
                const id = post.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    createPost(post : Post) {
        post.creationDate = Date.now();
        post.loveIts = 0;
        return this.firestore.collection('posts').add(post);
    }

    updatePost(post : Post, id) {
        delete post.id;

        this.firestore.doc('posts/' + id).update(post);
    }

    deletePost(id : string) {
        this.firestore.doc('posts/' + id).delete();
    }
}
