import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FirebaseAuthResponse, User} from '../../modules/auth/auth.model';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
public error: Subject<string> = new Subject<string>()
  constructor(private http: HttpClient) { }
  get token(): string {
    const expiresDay = new Date(localStorage.getItem('fb-token-expires'));
    if (new Date() > expiresDay){
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {

    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }
  logout(): void{
    this.setToken(null);
  }
  register(newUser: User): Observable<any> {
  return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, newUser)
    .pipe(
      tap(this.setToken),
      catchError(this.handleError.bind(this))

    )
  }
  isAuthenticated(): boolean {
    return !!this.token; // привели значение к boolean
  }
  private handleError(error: HttpErrorResponse){
    const {message} = error.error.error;
    switch (message){
      case 'INVALID_EMAIL':
        this.error.next('Неверный email')
        break;
      case 'INVALID_PASSWORD':
        this.error.next('Неверный пароль')
        break;
      case 'EMAIL_NOT_FOUND':
        this.error.next('email не зарегистрирован')
        break;
      case 'EMAIL_EXISTS':
        this.error.next('Email уже используется другой учетной записью')
        break;
      case 'OPERATION_NOT_ALLOWED':
        this.error.next('пароль для входа в этот проект отключен')
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        this.error.next('Заблокированы все запросы с этого устройства из-за необычной активности. Попробуйте позже')
        break;
    }
    return throwError(error);
}
  private setToken(response: FirebaseAuthResponse | null) {
    if (response){
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000); // дополнительный плюс для конвертации строчки в число
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-expires', expDate.toString());
    } else {
      localStorage.clear();
    }

  }
}
