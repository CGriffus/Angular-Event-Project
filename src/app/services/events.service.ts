import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEventData(
    keyword: string
    // location: string,
    // startDate: string,
    // endDate: string
  ): Observable<any> {
    return this.http.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=GX1HlIe7ux6BqPdwQLFgPQ1Q05s11VaH`
    );
  }
}

// postalCode=${location}&startDateTime=${startDate}&endDateTime=${endDate}
