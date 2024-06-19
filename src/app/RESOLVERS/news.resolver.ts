import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {BackendService} from "../SERVICES/backend.service";
import {News} from "../MODELS/models";
import {Observable} from "rxjs";
import {NewsStoreService} from "../SERVICES/news-store.service";

export const newsResolver: ResolveFn<Promise<News[]>> = (route, state) => {
  const store = inject(NewsStoreService);
  return store.getNews();
};
