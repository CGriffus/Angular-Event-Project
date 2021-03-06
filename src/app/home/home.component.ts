import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  eventData: any[];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventData = this.eventService.returnData();
  }

  getData(form: NgForm): void {
    this.eventService.getEventData(form).subscribe(response => {
      this.eventData = response["_embedded"].events;
      this.eventService.setData(this.eventData);
    });
  }

  addToFavorites(coolEvent: any) {
    this.eventService.addToFavorites(coolEvent);
  }

  goToFavorites() {
    this.eventService.goToFavorites();
  }
}
