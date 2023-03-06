import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  faBars = faBars;
  displayMenu: boolean = false;
  displaySubMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    //toggle
    this.displayMenu = !this.displayMenu;
  }

  showSubMenu($e: any) {
    if($e) {
      $e.preventDefault();
    }
    this.displaySubMenu = !this.displaySubMenu;
  }

}
