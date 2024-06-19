import {Component, Input} from '@angular/core';
import {News} from "../../MODELS/models";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  public item: News = {
    id: 0,
    title: '',
    description: '',
    imgUrl: '',
    newsText: '',
    author: ''
  };

  @Input() set news(value: News) {
    this.item = value;
  }
}
