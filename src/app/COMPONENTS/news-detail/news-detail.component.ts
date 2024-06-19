import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs";
import {NewsStoreService} from "../../SERVICES/news-store.service";
import {News} from "../../MODELS/models";

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit {
  constructor(private ar: ActivatedRoute, private store: NewsStoreService) {
  }
  news!: News;
  ngOnInit() {
    this.ar.paramMap.pipe(take(1)).subscribe(param => {
      const id = param.get('id');
      if (id) this.store.getNewsById(+id).then(r => {
        this.news = r;
      })
    })
  }
}
