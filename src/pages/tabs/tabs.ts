import { Component } from "@angular/core";
import { FavouritesPage } from "../favourites/favourites";
import { LibraryPage } from "../library/library";

@Component({
    selector:'tabs-page',
    template: `<ion-tabs>
    <ion-tab [root]="favour" tabTitle="Favourites" tabIcon="star"></ion-tab>
    <ion-tab [root]="library" tabTitle="Library" tabIcon="bookmarks"></ion-tab>
</ion-tabs>`
})

export class TabsPage{
    favour=FavouritesPage;
    library=LibraryPage;
}