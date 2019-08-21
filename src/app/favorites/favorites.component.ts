import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.favorites = this.eventService.returnFavorites();
  }
}
