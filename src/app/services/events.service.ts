import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private http: HttpClient, private router: Router) {}

  getEventData(data: any): Observable<any> {
    return this.http.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${
        data.keyword
      }&city=${data.location}&apikey=gkoO7RxqF2XQCgIYel4GffUzArf8WaAG`
    );
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
}
