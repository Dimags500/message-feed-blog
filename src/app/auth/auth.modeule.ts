import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

import { reducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RegisterEffect } from 'src/app/auth/store/effect/register.effect';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendMessages.module';
import { PersistanceService } from 'src/app/shared/services/persistent.service';
import { LoginEffect } from 'src/app/auth/store/effect/login.effect';
import { GetCurrentUserEffect } from 'src/app/auth/store/effect/getCurrentUser.effect';

const routes = [
  {
    path: 'registration',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
