import { Component } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecoincoin';

  constructor(private location: Location) {}

  isLoginPage() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.split('/')[1];
    if(titlee === 'login'){
        return false;
    }
    else {
        return true;
    }
  }
}
