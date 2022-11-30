import { routerNavigatedAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';

const initialState: FeedStateInterface = {
  data: null,
  isLoding: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state: FeedStateInterface) => ({
    ...state,
    isLoding: true,
  })),

  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoding: false,
      data: action.feed,
    })
  ),

  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoding: false,
    })
  ),
  
  on(routerNavigatedAction , () : FeedStateInterface => initialState)
);

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
