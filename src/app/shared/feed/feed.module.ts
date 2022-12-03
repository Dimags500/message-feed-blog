import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reduser';
import { ErrorMessageModule } from '../modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../modules/loading/loading.module';
import { PaginationModule } from '../modules/pagination/pagination.module';
import { TagListModule } from '../modules/tagList/taglist.module';
import { FeedTogglerModule } from '../modules/feedToggler/feed-toggler.module';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule ,RouterModule , EffectsModule.forFeature([GetFeedEffect]) , 
    StoreModule.forFeature('feed',reducers) , ErrorMessageModule , LoadingModule ,PaginationModule ,
    TagListModule , FeedTogglerModule],
  providers : [FeedService] ,
  exports : [FeedComponent]
})
export class FeedModule { }
