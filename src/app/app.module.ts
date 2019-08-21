import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { EventListComponent } from "./event-list/event-list.component";
import { BucketlistPageComponent } from "./bucketlist-page/bucketlist-page.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "eventDetail", component: EventDetailComponent },
  { path: "eventList", component: EventListComponent },
  { path: "bucketList", component: BucketlistPageComponent },
  { path: "search", component: SearchCriteriaComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    EventListComponent,
    BucketlistPageComponent,
    EventDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
