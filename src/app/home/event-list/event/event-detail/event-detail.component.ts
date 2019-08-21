import { Component, OnInit, Input } from "@angular/core";
// import { EventService } from "../event.service";

@Component({
  selector: "app-event-detail",
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  @Input() event;
  constructor() {}

  ngOnInit() {}
}
