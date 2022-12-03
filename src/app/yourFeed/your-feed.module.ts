import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { BannerModule } from "../shared/modules/banner/banner.module";
import { FeedTogglerModule } from "../shared/modules/feedToggler/feed-toggler.module";
import { PopularTagsModule } from "../shared/modules/popularTags/popularTags.module";
import { FeedModule } from "../shared/feed/feed.module";
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
    path : 'feed' ,
    component : YourFeedComponent
  }
  
];

@NgModule({
    declarations: [YourFeedComponent],
    imports: [
        CommonModule,
        BannerModule,
        FeedTogglerModule,
        PopularTagsModule,
        FeedModule,
        RouterModule.forChild(routes),
    ]
})
export class YourFeedModule { }
