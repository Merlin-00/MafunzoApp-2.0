import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  imports: [],
  template: `
    <h1>Mafunzo<button (click)="onlagout()">Déconnexion</button></h1> 
    
  `,
  styles: `
  h1{
    color: white;
    margin: 0 auto;
    padding: 0.5%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-Content: space-between;
    background-color: rgb(245, 165, 107);
    margin-bottom: 3%;
    button{
      background-color: white;
      color: chocolate;
      padding: 0.5%;
    }
}
  `
})
export class BarComponent{
  private router = inject(Router)

  onlagout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}


