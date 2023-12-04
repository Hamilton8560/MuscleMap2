import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent {
  stripe: any;
  elements: any;

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.stripe = (window as any).Stripe('pk_test_51NDASeHv8mumYCroS8ANTHn8T98wKk6ZdL44M88e5PxRJOzoh8WZL8PvYDomuz09lIyoqXJRdIXLhD3lbpEQCC64009M6r8O9x');
    this.elements = this.stripe.elements();
    console.log(this.elements)
    // Initialize Stripe elements here
  }

  subscribe() {
    this.http.post<{ id: string }>('http://localhost:3000/stripe/create-checkout-session', {})
     
    .subscribe({
        next: (session) => {
          console.log('Session ID received:', session.id); // Log the session ID
          this.stripe.redirectToCheckout({
            sessionId: session.id,
          }).then((result) => {
            if (result.error) {
              console.error('Error in redirectToCheckout:', result.error.message); // Log redirectToCheckout error
            }
          });
        },
        error: (err) => {
          console.error('HTTP error:', err); // Log HTTP error
        }
    });
  }
  
}