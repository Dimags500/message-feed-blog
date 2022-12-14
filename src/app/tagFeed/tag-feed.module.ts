import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feed-toggler.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { FeedModule } from '../shared/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';

const routes = [
  {
    path : 'tags/:slug' ,
    component : TagFeedComponent
  }
  
];


@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes),
    FeedTogglerModule,
    PopularTagsModule,
    FeedModule,
    BannerModule

  ] ,
  exports : [TagFeedComponent]
})
export class TagFeedModule { }
