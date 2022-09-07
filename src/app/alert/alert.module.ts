import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { TimePipe } from './../shared/services/alert.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [AlertComponent],
  declarations: [AlertComponent, TimePipe]
})
export class AlertModule { }
