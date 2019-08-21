import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  @Input() event;
  @Output() addToFavoritesEvent = new EventEmitter<any>();
  favorite: boolean = false;

  constructor() {}

  ngOnInit() {}

  // coolEvent is reference to event from array
  addToFavorites(coolEvent: any) {
    this.addToFavoritesEvent.emit(coolEvent);
    this.favorite = true;
  }
}
