import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewsFeedComponent,
    PostComponent,
    FooterComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
