import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./home/sidebar/search-criteria/search-criteria.component";
import { EventListComponent } from "./home/event-list/event-list.component";
import { BucketlistPageComponent } from "./bucketlist-page/bucketlist-page.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./home/sidebar/sidebar.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "eventDetail", component: EventDetailComponent },
  { path: "bucketList", component: BucketlistPageComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    EventListComponent,
    BucketlistPageComponent,
    EventDetailComponent,
    HomeComponent,
    SidebarComponent
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
