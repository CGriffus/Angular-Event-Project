import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventService {
  eventData: any[] = [];
  favorites: any[] = [];
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
  }

  returnData() {
    return this.eventData;
  }

  returnFavorites() {
    return this.favorites;
  }
  goToFavorites() {
    this.router.navigate(["favorites"]);
  }

  addToFavorites(coolEvent: any) {
    this.favorites.push(coolEvent);
    console.log(this.favorites);
  }
}
