import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {News} from "../MODELS/models";
import {SliderComponent} from "../COMPONENTS/slider/slider.component";
import {NewsCardComponent} from "../SHARED/news-card/news-card.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    SliderComponent,
    NewsCardComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
  }

  news: News[] = []

  ngOnInit() {
    this.activatedRoute.data.subscribe(params => {
      this.news = params['news'] as News[];
    })
  }

}
