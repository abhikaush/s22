import {User} from '../../model/user';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetailsUrl = 'api/user';
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

  getUserDetails(userId:string): Observable<User> {
//const url = `${this.userDetailsUrl}/${userId}`;
    const url=this.userDetailsUrl;
    return this.http.get<User>(url).pipe(
      tap(Rides => console.log('fetched user ride')),
      catchError(this.handleError<User>('UserDetails'))
    );
  }


}
