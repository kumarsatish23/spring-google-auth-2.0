import { Component, AfterViewInit } from '@angular/core';
import { GoogleAuthService } from './auth/google-auth.service';

declare const google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor(public googleAuthService: GoogleAuthService) {}

  ngAfterViewInit(): void {
    this.initializeGoogleSignIn();
  }

  private initializeGoogleSignIn(): void {
    console.log('Initializing Google Sign-In button...');
    google.accounts.id.initialize({
      client_id: '*********************************************',
      callback: (response: any) => this.handleCredentialResponse(response),
      scope: 'profile email openid',
    });
    google.accounts.id.renderButton(document.getElementById('google-signin-button'), {
      theme: 'outline',
      size: 'large',
      shape: 'pill',
      width: '100%',
    });
  }


  private handleCredentialResponse(response: any): void {
    if (response.credential) {
      this.googleAuthService.authenticateWithGoogle(response.credential);
    } else {
      console.error('Google OAuth failed:', response);
    }
  }

  signOut(): void {
    this.googleAuthService.logout();
    google.accounts.id.disableAutoSelect(); // Disable automatic re-login
    this.initializeGoogleSignIn(); // Reinitialize the Google Sign-In button
  }
}
