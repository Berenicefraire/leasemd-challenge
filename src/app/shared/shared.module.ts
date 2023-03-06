import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DataService } from './services/data.service';
import { BrowserService } from './services/browser.service';
import { PointCardComponent } from './components/point-card/point-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';

@NgModule({
  declarations: [CardComponent, PointCardComponent, FooterComponent, HeaderComponent, HeaderMobileComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [CardComponent, FontAwesomeModule, PointCardComponent, FooterComponent, HeaderComponent, HeaderMobileComponent],
  providers: [DataService, BrowserService]
})
export class SharedModule { }
