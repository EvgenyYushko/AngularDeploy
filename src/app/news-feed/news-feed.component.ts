import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent  {
  products = products;

  test = 'asd';
  
}
