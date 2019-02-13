import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

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
        FontAwesomeModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
    ],
    providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
