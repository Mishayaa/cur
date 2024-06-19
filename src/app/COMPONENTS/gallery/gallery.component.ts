import {Component, OnInit,} from '@angular/core';
import {NewsStoreService} from "../../SERVICES/news-store.service";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  images: string[] = []
  currentImg = ''

  ngOnInit() {
    this.store.getNews().then(val => {
      this.images = val.map(value => value.imgUrl);
      this.currentImg = this.images[0];
    });
  }

  constructor(private store: NewsStoreService) {
  }

  changeImg(i: number) {
    this.currentImg = this.images[i]
  }

}
