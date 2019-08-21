import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  eventData: any[];
  constructor(private http: HttpClient, private router: Router) {}

  getEventData(form: any): Observable<any> {
    console.log(form.value);
    return this.http.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=n0LYhyC6gPm4im2QzA9w62NcjY90NAAG&keyword=${
        form.value.keyword
      }&radius=10&unit=miles&locale=*&startDateTime=${
        form.value.startDate
      }T00:00:01Z&endDateTime=${form.value.endDate}T23:59:59Z&city=${
        form.value.location
      }`
    );
  }

  getEvents() {
    return this.eventData;
  }

  viewFavorites() {
    this.router.navigate(["bucketList"]);
  }

  viewDetails() {
    this.router.navigate(["eventDetail"]);
  }
}
