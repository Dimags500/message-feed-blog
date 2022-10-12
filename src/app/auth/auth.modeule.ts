import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';

const routes = [
  {
    path: 'registration',
    component: RegisterComponent,
  },
];
@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}