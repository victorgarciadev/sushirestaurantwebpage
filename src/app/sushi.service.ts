import { Injectable } from '@angular/core';
import { Sushi } from './sushi';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SushiService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getSushi(): Observable<Sushi[]> {
    return this.http.get<Sushi[]>(this.sushiUrl).pipe(catchError(this.handleError<Sushi[]>('getSushi', [])));
  }

  /** GET hero by id. Will 404 if id not found */
  getSushis(id: number): Observable<Sushi> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const url = `${this.sushiUrl}/${id}`;
    return this.http.get<Sushi>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Sushi>(`getSushi id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateSushi(sushi: Sushi): Observable<any> {
    return this.http.put(this.sushiUrl, sushi, this.httpOptions).pipe(
      tap(_ => this.log(`updated sushi id=${sushi.id}`)),
      catchError(this.handleError<any>('updateSushi'))
    );
  }

  /** POST: add a new hero to the server */
  addSushi(sushi: Sushi): Observable<Sushi> {
    return this.http.post<Sushi>(this.sushiUrl, sushi, this.httpOptions).pipe(
      tap((newSushi: Sushi) => this.log(`added sushi w/ id=${newSushi.id}`)),
      catchError(this.handleError<Sushi>('addSushi'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteSushi(id: number): Observable<Sushi> {
    const url = `${this.sushiUrl}/${id}`;

    return this.http.delete<Sushi>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted sushi id=${id}`)),
      catchError(this.handleError<Sushi>('deleteSushi'))
    );
  }

  /* GET heroes whose name contains search term */
searchSushi(term: string): Observable<Sushi[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Sushi[]>(`${this.sushiUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found sushi matching "${term}"`) :
       this.log(`no sushi matching "${term}"`)),
    catchError(this.handleError<Sushi[]>('searchSushi', []))
  );
}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** Log a SushiService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SushiService: ${message}`);
  }

  private sushiUrl = 'api/sushi';  // URL to web api

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
