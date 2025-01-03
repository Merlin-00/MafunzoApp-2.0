import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarComponent } from '../shared/bar.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink,BarComponent],
  template: `
    <app-bar/>
  
    <main class="container">
      <h1>
      <a class="card" [routerLink]="'/student'">voir mes étudients</a><br>
      <a class="card" [routerLink]="'/lesson'">voir mes cours</a><br>
      <hr>
        Gerer vos cours ainsi que 
        vos étudients d'une manière professionelle
      </h1><br>
      <p>
        Nous vous proposons un tableau de bord vous permettant de gerer vos
        sessions, <br />
        suivre les avancés de vos étudients et consulter leurs feedbacks
      </p>
    </main>
  `,
  styles: `
  .container{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .card{
      width: 200px;
      margin: 0 auto;
      text-decoration-line: none;
      font-size: 25px;
      color: rgb(243, 183, 141);
      display: block;
      transition: 250ms ease-in-out;
      &:hover{
        color: rgb(140, 180, 140);
        scale: 0.98; 
        opacity: 0.8;
      } 
    }
    h1{
      font-size:35px;
    } 
    p{
        font-size: 25px;
      } 
  }

  `,
})
export default class HomeComponent {}
