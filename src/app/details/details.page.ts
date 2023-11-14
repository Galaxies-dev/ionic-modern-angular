import { Component, Input, WritableSignal, inject, signal } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonItem,
    CurrencyPipe,
    DatePipe,
  ],
})
export class DetailsPage {
  private movieService = inject(MovieService);
  public movie: WritableSignal<MovieResult | null> = signal<MovieResult | null>(null);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  // Load the movie details when the id changes through the URL :id parameter
  @Input()
  set id(movieId: string) {
    // This is just to show Signal usage
    // You could also just assign the value to a variable directly
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      this.movie.set(movie);
    });
  }

  constructor() {
    // Load the the required ionicons
    addIcons({
      cashOutline,
      calendarOutline,
    });
  }
}
