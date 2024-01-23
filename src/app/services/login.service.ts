import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../model/country';
import { State } from '../model/state';
import { City } from '../model/city';

@Injectable()

export class LoginService {
  private baseUrl = 'http://localhost:9090/hrms/v1';

  public test = 1;

  constructor(private http: HttpClient) { }

  public validateUserName(userName: object): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/login/validate/${userName}`);
  }

  public getCountryName():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.baseUrl}/common/country/all`);
  }

  public getStatebyCountry(countryID: number): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/common/region/${countryID}/all`)
  }

  public getCitybyState(stateID: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}/common/city/${stateID}/all`)
  }

  // public createUser(data: any): Observable<boolean> {
  //   return this.http.post(`${this.baseUrl}/user`, {data}).pipe(
  //     map(_ => true),
  //     catchError(error => of(false))
  //   );
  // }
  // public authenticateLogin(userName: object, password: object): Observable<boolean> {
  //   return this.http.get<boolean>(`${this.baseUrl}/login/validate/${userName}/${password}`)
  // }
}
