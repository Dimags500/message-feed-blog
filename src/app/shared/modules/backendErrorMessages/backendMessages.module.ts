import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendErrorMessagesComponnent } from './components/backendErrorMessages/backendErrorMessages.component';

@NgModule({
  declarations: [BackendErrorMessagesComponnent],
  imports: [CommonModule],
  exports: [BackendErrorMessagesComponnent],
})
export class BackendErrorMessagesModule {}
