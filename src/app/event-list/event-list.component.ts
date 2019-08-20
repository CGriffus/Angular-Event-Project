import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  ngOnInit() {}

  goToDetails() {
    this.eventsService.viewDetails();
  }
}
