import { Component } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'dga-movies',
  standalone: true,
  providers: [ImdbService],
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  searchTerm: any = '';
  movies$!: Observable<any[]>;

  constructor(private ImdbService: ImdbService, public LoaderService:LoaderService) {}

  search() {
    if (this.searchTerm.trim() === '') return;
    this.movies$ = this.ImdbService.searchMovies(this.searchTerm.trim());
  }
}
