import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResult, MovieResult } from './interfaces';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a97243d7813d31446f6c43284e6854d5';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`);
    // .pipe(
    //   delay(2000) // Simulate slow network
    // );
  }

  getMovieDetails(id: string): Observable<MovieResult> {
    console.log(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  }
}
