import { OfferRide } from '../../model/offerride';
import {Ride} from '../../model/ride';
import { TakeRide } from '../../model/takeride';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SearchRideService {
  private searchRideUrl = "api/searchRide";
  constructor(private http: HttpClient) {}


  searchRide(rideDetails: TakeRide): Observable<OfferRide[]> {
    return this.http.post<OfferRide[]>(this.searchRideUrl, rideDetails, httpOptions).pipe(tap(),
      catchError(this.handleError('searchRide', []))
    );
  }



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

}
