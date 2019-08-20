import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  eventData: any;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {}

  getEvents(form: any): void {
    console.log(form.value);
    this.eventsService.getEventData(form.value).subscribe(response => {
      this.eventData = response.data;
      console.log(response);
    });
  }

  goToEvents() {
    this.eventsService.viewEvents();
  }

  goToFavs() {
    this.eventsService.viewFavorites();
  }
}
