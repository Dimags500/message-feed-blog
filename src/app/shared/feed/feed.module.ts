import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reduser';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule ,RouterModule , EffectsModule.forFeature([GetFeedEffect]) , StoreModule.forFeature('feed',reducers)],
  providers : [FeedService] ,
  exports : [FeedComponent]
})
export class FeedModule { }
