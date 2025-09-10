import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subreddit } from '../interfaces/subreddit.interface';
import { RESTSubreddit } from '../interfaces/RESTSubreddit.interface';
import { map, Observable } from 'rxjs';
import { SubredditMapper } from '../mapper/subreddit.mapper';

const API_URL = 'http://localhost:4000/api'

@Injectable({
  providedIn: 'root'
})

export class SubredditService {

  private http = inject(HttpClient);


  getAllSubreddits(): Observable<Subreddit[]>{
    return this.http.get<RESTSubreddit[]>(`${API_URL}/subreddits`)
    .pipe(
      map(SubredditMapper.mapRESTSubredditArrayToSubredditArray)
    )
  }


  updateSubreddits(): Observable<any>{
  return this.http.put(`${API_URL}/update`, {});
  }


}
