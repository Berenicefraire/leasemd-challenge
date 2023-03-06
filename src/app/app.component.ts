import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrowserService } from './shared/services/browser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bkObs$: Subscription;
  breakpoint: string = '';
  constructor(private browser: BrowserService) {
    this.bkObs$ = this.browser.screenSizeObserver$.subscribe(bk => this.breakpoint = bk);
  }
}
