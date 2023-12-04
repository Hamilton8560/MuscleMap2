import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent{
sessionId: string | null = null;
userUpdate;
constructor(private route: ActivatedRoute, private authService: AuthService) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.sessionId = params['session_id'];
     this.authService.user$.subscribe(user => this.userUpdate = user)
  });
}
}