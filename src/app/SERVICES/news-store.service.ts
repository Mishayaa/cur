import {Injectable} from '@angular/core';
import {News} from "../MODELS/models";
import {BackendService} from "./backend.service";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsStoreService {
  news: News[] = []

  constructor(private bs: BackendService) {
  }

  private async _test(): Promise<News[]> {
    return await firstValueFrom(this.bs.getNews())
  }

  async getNews(): Promise<News[]> {
    if (this.news.length === 0) {
      this.news = await this._test(); // Await the data from _test
    }
    return this.news;
  }

  getNewsById(id: number): Promise<News> {
    return this.getNews().then(r => r[id])
  }

}
