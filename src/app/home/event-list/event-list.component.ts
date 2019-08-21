import { Component, OnInit, Input } from "@angular/core";
// import { EventService } from "";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  @Input() events;

  constructor() {}

  ngOnInit() {}

  goToDetails() {
    // this.eventService.goToFavorites();
  }
}
