import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedComponent
  },
  {
    path: 'info',
    component: InformationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
