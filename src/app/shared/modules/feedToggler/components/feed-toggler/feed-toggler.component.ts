import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps : string | null;

  isLoggedIn$ :  Observable<boolean> ;
  constructor(private stroe: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() :void {
    this.isLoggedIn$ = this.stroe.pipe(select(isLoggedInSelector))
  }

}
