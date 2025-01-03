import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { ToolbarComponent } from '../shared/toolbar.component';
import StudentInfoComponent from '../details/student-info.component';

@Component({
  selector: 'app-lesson',
  imports: [RouterLink, StudentInfoComponent, ToolbarComponent],
  template: `
  <app-toolbar title="Liste d'étudients"/>
  <main>
    <header>
      <h3>Mes Etudients</h3>
      <button routerLink="/addStudent">Nouvel Etudient</button>
    </header>
    <div class="container">
      @for (stud of student; track $index){
        <a class="card" [routerLink]="'/studentDetail/'+$index">
          <app-student-info [student]="stud"/>
        </a><br>
      }@empty {
        <p align="center">Oups! pas encore de nouvel étudient à afficher<br>Commencez par ajouter un étudient</p>
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
  student= this.es.getStudent();
}
