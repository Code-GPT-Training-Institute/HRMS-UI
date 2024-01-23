import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseURL = 'http://localhost:9090/hrms/v1';
  constructor(private httpclient: HttpClient) { }

  public createUser(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.baseURL}/login`, user);
  }
}
