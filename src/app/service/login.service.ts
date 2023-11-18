import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:9090/hrms/v1'

  constructor(private http: HttpClient) { }

  public validateUserName(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/login/validate/${userName}`);
  }
}
