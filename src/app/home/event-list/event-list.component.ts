import { Component, OnInit, Input } from "@angular/core";
// import { EventsService } from "../../services/events.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  @Input() events;
  constructor() {}

  ngOnInit() {
    // this.eventData = this.eventsService.getEvents();
    // console.log(this.eventData);
  }

  // goToDetails() {
  //   this.eventsService.viewDetails();
  // }

  // goToHome() {
  //   this.eventsService.viewHome();
  // }
}
