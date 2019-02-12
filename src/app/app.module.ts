import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostListItemComponent } from './components/post/post-list-item/post-list-item.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PostListComponent,
        PostListItemComponent,
        NewPostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
