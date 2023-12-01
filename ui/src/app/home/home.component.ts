import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private router: Router) {

  }

  logout() {
    this.auth.logout({ returnTo: document.location.origin } as any).subscribe(()=>
      this.router.navigate([''])
    )
  }
  
}

