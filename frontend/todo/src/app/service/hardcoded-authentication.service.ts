import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "negura" && password === "noaptea") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLogedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
}
