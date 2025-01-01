import { Component, inject } from '@angular/core';
import { RouteService } from '../services/route.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  template: `
  <header class="master">
    <h1>Bienvenue sur <span>Mafunzo</span></h1>
    <p>ici nous proposons un programme de formation complet</p>

    <div class="container">
      <p>vous avez déjà un compte ?</p>
      <button (click)="connect()">se connecter</button><br>
      <button [routerLink]="'/connect'">inscrivez-vous</button>
    </div>
  </header>


  `,
  styles: `
  span{
    color: chocolate;
  }
  .master{
    text-align: center;
    padding:20px;
    .container{
      max-width: 720px;
      border: 1px solid grey;
      margin: 0 auto;
    } 
  }
 
  `
})
export default class LoginComponent {
  private route=inject(Router)
  connect(){
    localStorage.setItem('logged','true');
    this.route.navigate(['/home'])
  }
}
