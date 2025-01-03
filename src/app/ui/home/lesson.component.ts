import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../core/services/user.service';
import LessonInfoComponent from '../details/lesson-info.component';
import { ToolbarComponent } from '../shared/toolbar.component';

@Component({
  selector: 'app-lesson',
  imports: [RouterLink, LessonInfoComponent, ToolbarComponent],
  template: `
  <app-toolbar title="Liste des lessons"/>
  <main>
    <header>
      <h3>Mes Lessons</h3>
      <button routerLink="/addLesson">Nouvelle lesson</button>
    </header>
    <div class="container">
      @for (cour of lesson; track $index){
        <a class="card" [routerLink]="'/lessonDetail/'+$index">
          <app-lesson-info [lesson]="cour"/>
        </a><br>
      }@empty {
        <p align="center">Oups! pas encore de nouvel lesson à afficher<br>Commencez par ajouter une lesson</p>
      }
    </div>
  </main>`,
  styles: `
  main{
    max-width: 1200px;
    margin: 1rem auto;
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card{
      border: 1px solid grey;
      padding-left: 1rem;
      text-decoration: none;
      display: block;
      color: inherit;
      border-radius: 8px;
      transition: 250ms ease-in-out;
      &:hover{
        scale: 0.98;  
      }
    }
  }
  `, 
})
export default class EmpoyeListComponent {
  private es=inject(UserService);
  lesson= this.es.getLesson();
}
