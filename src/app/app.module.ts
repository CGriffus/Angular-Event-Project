import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FormComponent } from "./home/sidebar/form/form.component";
import { EventComponent } from "./home/event-list/event/event.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./home/sidebar/sidebar.component";
import { EventListComponent } from "./home/event-list/event-list.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { EventDetailComponent } from "./home/event-list/event/event-detail/event-detail.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EventComponent,
    HomeComponent,
    SidebarComponent,
    EventListComponent,
    FavoritesComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
