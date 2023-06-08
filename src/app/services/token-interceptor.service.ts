import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      request = request.clone({ setHeaders: { Authorization: `Token ${authToken}` } });
    }

    // send cloned request with header to the next handler.
    return next.handle(request);
  }
}


