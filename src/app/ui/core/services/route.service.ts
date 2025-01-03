import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private route= inject(Router)
  isLogged(){
    if(localStorage.getItem('logged')){
      return true
    }else{
      this.route.navigate(['login'])
      return false
    }
  }
}
