import { Component, inject, input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { ToolbarComponent } from '../shared/toolbar.component';
import StudentInfoComponent from './student-info.component';
import { ok } from '../core/model/valid2.component';

@Component({
  selector: 'app-detail-student',
  imports: [ToolbarComponent, StudentInfoComponent],
  template: `
    <app-toolbar [title]="student ? student.name : ''" />
    <div class="container">
      <app-student-info [student]="student" />
      <hr />
      <div class="btn">
        <button (click)="onEdit(id(), student)">Modifier</button>
        <button class="supp" (click)="onDelete(id())">Supprimer</button>
      </div>
    </div>
  `,
  styles: `
  .container{
    max-width: 1200px;
    margin: 1rem auto;
    .btn{
      display: flex;
      justify-Content: end;
      gap: 1rem;
    } 
    .supp{
      background: red;
    }
  }

  `,
})
export default class DetailStudentComponent implements OnInit {
  title = inject(Title);
  route = inject(Router);
  id = input('id');
  student!: ok;
  private es = inject(UserService);
  ngOnInit(): void {
    this.student = this.es.idStudent(Number(this.id()));
    if (this.student) {
      this.title.setTitle(`${this.student.name}- mafunzo`);
    } else {
      this.route.navigate(['/']);
    }
  }
  onEdit(id: string, student: ok) {
    student.id = id;
    this.route.navigate(['/addStudent'],{
      state: student
    })
  }
  onDelete(id: string) {
    this.es.onDeleteS(Number(id));
    this.route.navigate(['/student']);
  }
}
