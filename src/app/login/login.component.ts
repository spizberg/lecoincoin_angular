import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CONFIG } from '../config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      window.alert("Already Connected");
      this.router.navigate(['list']);
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        if (res) {
          this.getUserInfo();
        }
        else {
          window.alert("Connexion échouée");
        }
      },
      error: (err) => console.log('Erreur de connexion')
    });
  }

  getUserInfo() {
    this.authService.getUserInfo().subscribe({
      next: (resp) => {
        sessionStorage.setItem(CONFIG.id, resp.id!.toString());
        this.router.navigate(['list']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
