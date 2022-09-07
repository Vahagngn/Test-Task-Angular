import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject, timer } from 'rxjs';
import { scan, takeWhile, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;
  public timer$ = timer(0, 500).pipe(
    scan(acc => --acc, 10),
    takeWhile(x => x >= 0)
  );

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  info(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'info', text: message });
    this.timer();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
    this.timer();
  }

  error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
    this.timer();
  }

  clear() {
    this.subject.next(null);
  }

  timer() {
    return this.timer$.subscribe(time => {
      if (time === 0) {
        this.clear();
      }
    });
  }
}
