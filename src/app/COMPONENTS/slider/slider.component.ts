import {Component, OnInit, signal} from '@angular/core';
import {NewsStoreService} from "../../SERVICES/news-store.service";
import {BehaviorSubject, interval, map, Observable, of, startWith, switchMap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIcon
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{
  index: number = 0;
  images: string[] = [];
  private imageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  obs!: Observable<string>;
  constructor(private store: NewsStoreService) {}
  indexSignal = signal(0)
  ngOnInit() {
    this.store.getNews().then(value => {
      this.images = value.map(newsItem => newsItem.imgUrl);
      this.startImageCycle();
    });
  }

  startImageCycle() {
    interval(10000).pipe(
      map(() => {
        this.indexSignal.set((this.index + 1) % this.images.length);
      })
    ).subscribe();
  }

  changeNews(operator: '+' | '-') {
    switch (operator) {
      case '+':
        this.index = (this.index + 1) % this.images.length;
        break;
      case '-':
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        break;
    }
    this.indexSignal.set(this.index);
  }

}
