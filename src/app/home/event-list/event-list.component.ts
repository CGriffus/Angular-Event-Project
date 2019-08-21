import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { EventService } from "";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  @Input() events;
  @Output() addToFavoritesEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  addToFavorites(coolEvent: any) {
    this.addToFavoritesEvent.emit(coolEvent);
  }
}
