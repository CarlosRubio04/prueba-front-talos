import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PostListComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'post/:id', component: PostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    CreatePostComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
