import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/app/auth/auth.modeule';
import { TopBarModule } from 'src/app/shared/topBar/topBar.module';
import { PersistanceService } from './shared/services/persistent.service';
import { AuthInterceptor } from './shared/services/interceptor.service';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { ErrorMessageComponent } from './shared/modules/errorMessage/components/error-message/error-message.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { YourFeedModule } from './yourFeed/your-feed.module';

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TopBarModule,
    HttpClientModule,
    GlobalFeedModule ,
    YourFeedModule ,
    StoreModule.forRoot({ router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
