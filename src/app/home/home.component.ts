import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  eventData: any[];
  constructor(private eventsService: EventsService) {}

  ngOnInit() {}

  getEvents(form: NgForm): void {
    this.eventsService.getEventData(form).subscribe(response => {
      this.eventData = response["_embedded"].events;
      console.log(this.eventData);
    });
  }
}
