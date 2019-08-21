import { Component, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventData: any[] = [];
  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventData = this.eventsService.getEvents();
    console.log(this.eventData);
  }

  goToDetails() {
    this.eventsService.viewDetails();
  }

  goToHome() {
    this.eventsService.viewHome();
  }
}
