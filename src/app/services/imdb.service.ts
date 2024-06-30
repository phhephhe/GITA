import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()

export class ImdbService {
  private apiUrl = 'https://online-movie-database.p.rapidapi.com/title/v2/find';

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<any> {
    const params = { title, limit: '20', paginationKey: '0', sortArg: 'moviemeter,asc' };
    return this.http.get(this.apiUrl, { params }).pipe(
      map((data:any) => data.results)
    );
  }

}