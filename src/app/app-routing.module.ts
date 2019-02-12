import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';

const routes : Routes = [
    {
        path: 'posts',
        component: PostListComponent
    },
    {
        path: 'new',
        component: NewPostComponent
    },
    {
        path: '**',
        redirectTo: 'posts'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
