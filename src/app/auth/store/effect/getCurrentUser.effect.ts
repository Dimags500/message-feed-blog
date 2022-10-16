import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of, pipe, tap } from 'rxjs';

import { PersistanceService } from 'src/app/shared/services/persistent.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser';
import { AuthService } from 'src/app/auth/services/auth.service';

import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );
}
