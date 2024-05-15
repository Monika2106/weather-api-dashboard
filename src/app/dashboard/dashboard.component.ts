import { Component, OnInit, } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from '../calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { GraphComponent } from '../graph/graph.component';
// Add the solid icons to the library
library.add(fas);
// Add the specific icon to the library
library.add(faCoffee);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarComponent,HttpClientModule,CarouselComponent,FontAwesomeModule,CommonModule,GraphComponent,CarouselModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  weatherData: any; // Variable to store weather data
  weatherDataHour: any; // Variable to store weather data
  selectedCountry: string = 'London'; // Default selected country
  selectedMetric: any ;
  view: string = 'daily';
  countries: string[] = [
    'London', 
    'New York', 
    'Paris', 
    'Tokyo', 
    'Berlin', 
    'Bengaluru', 
    ]; // Define countries array
    
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.getWeatherData(); // Call method to fetch weather data when component initializes
    this.getWeatherDataHour(); // Call method to fetch weather data when component initializes
  }
  

  getWeatherData(): void {
    // Make HTTP GET request to the Weather API
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=129c17a0b85b4b83817150122241305&q=${this.selectedCountry}`;
    this.http.get<any>(apiUrl)
    
      .subscribe(
        (response) => {
          // Handle successful response
          console.log('Weather data:', this.weatherData);

          // Assign weather data to variable
          this.weatherData = response;
        },
        (error) => {
          // Handle error
          console.error('Error fetching weather data:', error);
        }
      );
  }
  getWeatherDataHour(): void {
    // Make HTTP GET request to the Weather API
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=129c17a0b85b4b83817150122241305&q=${this.selectedCountry}`;
    this.http.get<any>(apiUrl)
    
      .subscribe(
        (response) => {
          // Handle successful response
          console.log('Weather data Hours:', this.weatherDataHour);

          // Assign weather data to variable
          this.weatherDataHour = response;
        },
        (error) => {
          // Handle error
          console.error('Error fetching weather data:', error);
        }
      );
  }
  onSelectCountry(country: string): void {
    this.selectedCountry = country;
    this.getWeatherData();
    this.getWeatherDataHour();
  }
  
  

}

