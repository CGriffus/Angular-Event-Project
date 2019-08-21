import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  @Output() getEventsForm = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  getEvents(form: NgForm) {
    this.getEventsForm.emit(form);
  }

  // goToFavs() {
  //   this.eventsService.viewFavorites();
  // }
}
