import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  @Output() getEventsSidebar = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  getEvents(form: NgForm) {
    this.getEventsSidebar.emit(form);
  }
}
