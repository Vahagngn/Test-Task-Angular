import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './../shared/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  message: any;

  constructor(public alert: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alert.getAlert().subscribe(message => {
      switch (message && message.type) {
        case 'info':
          message.cssClass = 'alert alert-info';
          break;
        case 'success':
          message.cssClass = 'alert alert-success';
          break;
        case 'error':
          message.cssClass = 'alert alert-error';
          break;
      }

      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
