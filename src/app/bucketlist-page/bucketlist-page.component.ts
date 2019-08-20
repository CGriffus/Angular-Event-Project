import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";

@Component({
  selector: "app-bucketlist-page",
  templateUrl: "./bucketlist-page.component.html",
  styleUrls: ["./bucketlist-page.component.css"]
})
export class BucketlistPageComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  ngOnInit() {}

  goToEvents() {
    this.eventsService.viewEvents();
  }
}
