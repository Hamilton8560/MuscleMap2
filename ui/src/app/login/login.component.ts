import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      console.log(isAuthenticated)
      if (isAuthenticated) {
        this.router.navigate(['home']);
      } else {
        this.auth.loginWithRedirect();
      }
    });
  }
}
