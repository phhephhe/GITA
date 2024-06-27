import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable()

export class ImdbService {
  private apiUrl = 'https://online-movie-database.p.rapidapi.com/title/v2/find';
  readonly authToken = "3f26fc796cmsh3b57359236df64bp113c47jsn93fe65321a8f"

  constructor(private http: HttpClient) { }

 
  searchMovies(title: string): Observable<any> {
    const params = { title, limit: '20', paginationKey: '0', sortArg: 'moviemeter,asc' };
    return this.http.get(this.apiUrl, { params }).pipe(
      tap(() => console.log),
      map((data:any) => data.results)
    );
  }

}
