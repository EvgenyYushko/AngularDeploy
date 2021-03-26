import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() name = '';
  @Input() price = 0;
  @Input() img = '';
  @Input() src = '';
  @Input() description = '';
}
