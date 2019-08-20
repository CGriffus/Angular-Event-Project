import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";

@Component({
  selector: "app-event-detail",
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  ngOnInit() {}

  goToEvents() {
    this.eventsService.viewEvents();
  }
}
