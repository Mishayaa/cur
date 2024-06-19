import {Component, OnInit} from '@angular/core';
import {News} from "../../MODELS/models";
import {NewsStoreService} from "../../SERVICES/news-store.service";
import {RouterLink} from "@angular/router";
import {NewsCardComponent} from "../../SHARED/news-card/news-card.component";
import {MatFormField, MatInput} from "@angular/material/input";
import {NgStyle} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    RouterLink,
    NewsCardComponent,
    MatInput,
    MatFormField,
    NgStyle,
    MatButton
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  news: News[] = []
  filtered: News[] = []
  search(val: string) {
    this.filtered = this.news.filter(value => value.title.toLowerCase().includes(val))
  }

  constructor(private store: NewsStoreService) {
  }

  ngOnInit() {
    this.store.getNews().then((res) => {
      this.news = res;
      this.filtered = res;
    })
  }

}
