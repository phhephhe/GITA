import { Component } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'dga-movies',
  standalone: true,
  providers: [ImdbService],
  imports: [MatCardModule,CommonModule,FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  searchTerm: string = '';
  movies$!: Observable<any[]>;

  constructor(private ImdbService: ImdbService) { }

  search() {
    if (this.searchTerm.trim() === '') return;
    this.movies$ = this.ImdbService.searchMovies(this.searchTerm.trim()).pipe(
      catchError((error: HttpErrorResponse) => {
        alert('ERROR : ' + error.error.message);
        return throwError(error);
      })
    )
  }
}
