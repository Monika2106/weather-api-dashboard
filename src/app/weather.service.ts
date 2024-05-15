import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.weatherapi.com/v1/current.json?key=129c17a0b85b4b83817150122241305&q=London';

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
