import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private readonly apiUrl = 'http://localhost:8080'; // Back-end base URL
  private readonly tokenKey = 'auth-token';
  private readonly userSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    this.initializeUser();
  }

  private initializeUser(): void {
    const storedToken = localStorage.getItem(this.tokenKey);
    if (storedToken) {
      this.authenticateWithToken(storedToken);
    }
  }

  public authenticateWithGoogle(token: string): void {
    this.storeToken(token);
    this.authenticateWithToken(token);
  }

  private authenticateWithToken(token: string): void {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http.post<any>(`${this.apiUrl}/auth/google`, { token }, { headers }).subscribe({
      next: (response) => {
        // Ensure the userSubject is updated with the received user object
        this.userSubject.next(response);
        console.log('User authenticated successfully:', response);
      },
      error: (error) => {
        console.error('Authentication error:', error);
        alert('Authentication failed. Please log in again.');
        this.logout();
      },
    });
  }

  public get user$(): Observable<any> {
    return this.userSubject.asObservable();
  }

  public isAuthenticated(): boolean {
    return this.userSubject.getValue() !== null;
  }

  public logout(): void {
    this.userSubject.next(null);
    this.clearToken();
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
