import {User} from '../../model/user';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationUrl = "api/registerUser";

  constructor(private http: HttpClient) {

  }



  registerUser(user: User): Observable<User> {

    return this.http.post<User>(this.registrationUrl, user, httpOptions).pipe(
      tap(),
      catchError(this.handleError<User>("registration")));
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
