import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template:  '<div>{{messageProps}}</div>' , 
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  constructor() { }
@Input('message') messageProps  : string  = 'Something went wrong';
  ngOnInit(): void {
  }

}
