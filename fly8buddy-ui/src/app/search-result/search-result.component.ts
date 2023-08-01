import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  @Input() flightOption: { Id: number, Airline: any, FromAirport: any, ToAirport: any, DepartureTime: any, ArrivalTime: any, FlightPrice: any } | undefined;

}
