import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [HttpClientModule, RouterModule],
  exports: [HttpClientModule],
  declarations: [
    ErrorComponent
  ]
})
export class SharedModule {

}
