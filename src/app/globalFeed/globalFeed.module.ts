import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeedModule } from "../shared/feed/feed.module";
import { BannerModule } from "../shared/modules/banner/banner.module";
import { PopularTagsModule } from "../shared/modules/popularTags/popularTags.module";
import { GlobalFeedComponent } from "./components/globalFeed/globalFeed.component";
import { FeedTogglerModule } from "../shared/modules/feedToggler/feed-toggler.module";

const routes = [
    {
        path :'' ,
        component : GlobalFeedComponent
    }
]

@NgModule({
    declarations: [GlobalFeedComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule, PopularTagsModule, FeedTogglerModule]
})

export class GlobalFeedModule {}