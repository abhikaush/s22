import {Ride} from '../../model/ride';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RideService {
  private rideUrl = 'api/ride';

  constructor(private http: HttpClient) {}


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //  this.log(`${operation} failed: ${error.messag}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  public getRide(): Observable<Ride> {


    return this.http.get<Ride>(this.rideUrl).pipe(
      tap(Rides => console.log('fetched heroes ride')),
      catchError(this.handleError<Ride>('getHeroes'))
    );
  }
}
