import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { StripeComponent } from './stripe/stripe.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StripeComponent,
    SuccessComponent,
    CancelComponent,
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-6oczod56veyowi0w.us.auth0.com',
      clientId: 'lM5ugI8Ie0etaXgzjUksKuo5di4DOAsd',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
