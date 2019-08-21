import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @Output() getDataFormEvent = new EventEmitter<any>();
  @Output() goToFavoritesEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  getData(form: NgForm) {
    this.getDataFormEvent.emit(form);
  }
  goToFavorites() {
    this.goToFavoritesEvent.emit();
  }
}
