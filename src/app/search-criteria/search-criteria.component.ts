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

  getEvents(form: NgForm): void {
    this.eventsService
      .getEventData(
        form.value.keyword
        // form.value.location,
        // form.value.startDate,
        // form.value.endDate
      )
      .subscribe(response => {
        this.eventData = response.data;
        console.log(this.eventData);
        console.log(form);
      });
  }
}
