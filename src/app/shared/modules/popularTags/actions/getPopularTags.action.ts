import { createAction, props } from "@ngrx/store";
import { PopularTagType } from "src/app/shared/types/popularTag.type";
import { ActionTypes } from "../store/actionTypes";


export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);
export const getPopularTagsSuccessAction = createAction(ActionTypes.GET_POPULAR_SUCCESS ,
     props<{popularTags : PopularTagType[]}>()) ;
export const getPopularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_FAILURE) ;