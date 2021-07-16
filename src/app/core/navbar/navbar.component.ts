import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  menuShow = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.menuShow = !this.menuShow;
  }
}
