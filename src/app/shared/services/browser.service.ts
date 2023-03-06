import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  // https://www.npmjs.com/package/@angular/cdk
  // https://material.angular.io/cdk/categories

  public screenSizeObserver$ = new BehaviorSubject<any>(null);

  private breakPoints = [
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
    Breakpoints.Web,
    Breakpoints.Tablet
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.getWindowSize();
  }
  private getWindowSize(){
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver$.next('xs');
      }
    });
    this.breakpointObserver.observe(Breakpoints.Small).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver$.next('small');
      }
    });
    this.breakpointObserver.observe(Breakpoints.Medium).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver$.next('medium');
      }
    });
    this.breakpointObserver.observe(Breakpoints.Large).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver$.next('large');
      }
    });
    this.breakpointObserver.observe(Breakpoints.XLarge).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver$.next('xlarge');
      }
    });
  }

}
