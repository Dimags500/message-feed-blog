import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import {parseUrl , stringify} from'query-string'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit , OnDestroy , OnChanges {

  @Input('apiUrl') apiUrlProps : string ;
  feed$ : Observable<GetFeedResponseInterface | null>
  error$ : Observable<string | null>
  isLoading$ : Observable<boolean>
  limit = environment.limit;
  baseUrl : string ;
  queryParamsSubscription : Subscription ;
  currentPage : number ;

  constructor(private store : Store , private router: Router , private route : ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged = !changes['apiUrlProps'].firstChange &&
                            changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue ;
    if(isApiUrlChanged){
      this.fetchFeed(); 
    }
  }

  ngOnInit(): void {
    this.initializeVales() ;
    this.initializeListeners() ;
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeVales(): void{
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.baseUrl  = this.router.url.split('?')[0]
  }
  initializeListeners() : void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params : Params) => {
        this.currentPage = Number(params['page'] || '1');
        console.log('current-page ' , this.currentPage)
        this.fetchFeed();
      }
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifydParams = stringify({
      limit: this.limit ,
      offset ,
      ...parsedUrl.query 
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifydParams}`
    this.store.dispatch(getFeedAction({url : apiUrlWithParams}))
  }

}
