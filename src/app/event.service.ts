import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventService {
  eventData: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  getEventData(form: any): Observable<any> {
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
  setData(events: any[]) {
    this.eventData = events;
    console.log(this.eventData);
  }

  returnData() {
    console.log(this.eventData);
    return this.eventData;
  }

  goToFavorites() {
    this.router.navigate(["favorites"]);
  }

  // .subscribe(response => {
  //   this.eventData = response["_embedded"].events;
  //   console.log(this.eventData);
  // });

  // getEvents() {
  //   return this.eventData;
  // }
}
