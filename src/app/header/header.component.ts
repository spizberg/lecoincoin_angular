import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router,
              private location: Location) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  isActive(page_link: string) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.split('/')[1]) {
      let actual_page = titlee.split('/')[1];
      if(actual_page === page_link){
        return true;
      }
      else {
        if ((actual_page === "edit" || actual_page === "show") && (page_link === "list")) {
          return true;
        }
        return false;
      }
    }
    else {
      return false;
    }
  }

}
