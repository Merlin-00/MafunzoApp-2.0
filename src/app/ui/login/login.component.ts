import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
      <div class="space"></div>
      <header class="container">
        <div class="item">
          <h1>Bienvenue sur <strong>Mafunzo</strong></h1><br>
            <p>Gerez vos sessions, suivez vos étudients et consultez leur feedback</p><br>
        </div>
        <button (click)="connect()">se connecter</button>
    </header>
  `,
  styles: `
  strong{
    color: chocolate;
  }
  .space{
    margin: 5%;
  }
  .container{
    margin: 0 auto;
    padding: 5%;
    max-width: 720px;
    background-color: white;
  }
  `
})
export default class LoginComponent {
  private route=inject(Router)
  connect(){
    localStorage.setItem('logged','true');
    this.route.navigate(['/connexion'])
  }
}
