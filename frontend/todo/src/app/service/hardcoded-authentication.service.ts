import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {}
  
  authenticate(username, password){
    if (username === "negura" && password === "noaptea") {
      return true;
    }
  }
}
