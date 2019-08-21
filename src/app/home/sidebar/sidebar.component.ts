import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  @Output() getDataSidebarEvent = new EventEmitter<any>();
  @Output() goToFavoritesEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  getData(form: NgForm) {
    this.getDataSidebarEvent.emit(form);
  }
  goToFavorites() {
    this.goToFavoritesEvent.emit();
  }
}
