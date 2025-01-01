import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,ToolbarComponent],
  template: `
    <app-toolbar title="Mafunzo"/>
  
    <main class="container">
      <h1>
      <a class="card" [routerLink]="'/student'">voir mes étudients</a>
      <a class="card" [routerLink]="'/lesson'">voir mes cours</a>
      <hr>
        Gerer vos cours ainsi que 
        vos étudients d'une manière professionelle
      </h1>
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
      padding: 1%;
      text-decoration-line: none;
      font-size: 25px;
      color: rgb(243, 183, 141);
      display: block;
      border-radius: 2px;
      transition: 250ms ease-in-out;
      &:hover{
          scale: 0.98;  
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
