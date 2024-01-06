import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable()

export class LoginService {
  private baseUrl = 'http://localhost:9090/hrms/v1';

  public test = 1;

  constructor(private http: HttpClient) { }

  public validateUserName(userName: object): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/login/validate/${userName}`);
  }

  public createUser(data: any): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/user`, {data}).pipe(
      map(_ => true),
      catchError(error => of(false))
    );
  }
  // public authenticateLogin(userName: object, password: object): Observable<boolean> {
  //   return this.http.get<boolean>(`${this.baseUrl}/login/validate/${userName}/${password}`)
  // }
}
