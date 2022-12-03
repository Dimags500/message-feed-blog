import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { GetPopularTagsEffect } from "./effects/getPopularTags.effect";
import { PopularTagsService } from "./services/popularTags.service";
import { reducers } from "./store/reducers";
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "../errorMessage/errorMessage.module";
import { LoadingModule } from "../loading/loading.module";


@NgModule({
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
})
export class PopularTagsModule {}