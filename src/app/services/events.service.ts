import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEventData(data: any): Observable<any> {
    return this.http.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${
        data.keyword
      }&city=${data.location}&startDateTime=${
        data.startDate
      }T00:00:01Z&endDateTime=${
        data.endDate
      }T23:59:59Z&apikey=gkoO7RxqF2XQCgIYel4GffUzArf8WaAG`
    );
  }
}
