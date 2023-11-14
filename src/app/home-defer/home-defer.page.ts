import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  InfiniteScrollCustomEvent,
  IonBadge,
  IonLabel,
  IonAvatar,
  IonItem,
  IonList,
  IonLoading,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonAlert,
} from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { catchError, finalize } from 'rxjs';

@Component({
  selector: 'app-home-defer',
  templateUrl: './home-defer.page.html',
  styleUrls: ['./home-defer.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel,
    IonBadge,
    IonAvatar,
    IonItem,
    IonList,
    IonLoading,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSkeletonText,
    IonAlert,
    DatePipe,
    RouterModule,
  ],
})
export class HomeDeferPage implements OnInit {
  private movieService = inject(MovieService);

  private currentPage = 1;
  public movies: any[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public isLoading = true;
  public error = null;
  public dummyArray = new Array(5);

  // Load the first page of movies during component initialization
  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    this.error = null;

    // Only show loading indicator on initial load
    if (!event) {
      this.isLoading = true;
    }

    // Get the next page of movies from the MovieService
    this.movieService
      .getTopRatedMovies(this.currentPage)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
        catchError((err: any) => {
          this.error = err.error.status_message;
          return [];
        })
      )
      .subscribe({
        next: (res) => {
          // Append the results to our movies array
          this.movies.push(...res.results);

          // Resolve the infinite scroll promise to tell Ionic that we are done
          event?.target.complete();

          // Disable the infinite scroll when we reach the end of the list
          if (event) {
            event.target.disabled = res.total_pages === this.currentPage;
          }
        },
      });
  }

  // This method is called by the infinite scroll event handler
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
