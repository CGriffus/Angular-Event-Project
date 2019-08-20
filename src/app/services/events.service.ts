import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  eventData: any;
  constructor(private http: HttpClient, private router: Router) {}

  getEventData(data: any): void {
    console.log(data.value);
    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=n0LYhyC6gPm4im2QzA9w62NcjY90NAAG&keyword=${
          data.value.keyword
        }&radius=10&unit=miles&locale=*&startDateTime=${
          data.value.startDate
        }T00:00:01Z&endDateTime=${data.value.endDate}T23:59:59Z&city=${
          data.value.location
        }`
      )
      .subscribe(response => {
        this.eventData = response["_embedded"].events;
        console.log(this.eventData);
      });
  }

  getEvents() {
    return this.eventData;
  }

  viewEvents() {
    this.router.navigate(["eventList"]);
  }

  viewFavorites() {
    this.router.navigate(["bucketList"]);
  }

  viewDetails() {
    this.router.navigate(["eventDetail"]);
  }

  viewHome() {
    this.router.navigate(["home"]);
  }
}
