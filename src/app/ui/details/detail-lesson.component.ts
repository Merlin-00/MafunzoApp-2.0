import { Component, inject, input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import LessonInfoComponent from './lesson-info.component';
import { Valid } from '../core/model/valid-model.component';
import { UserService } from '../core/services/user.service';
import { ToolbarComponent } from '../shared/toolbar.component';

@Component({
  selector: 'app-detail-lesson',
  imports: [ToolbarComponent, LessonInfoComponent],
  template: `
    <app-toolbar [title]="lesson ? lesson.name : ''" />
    <div class="container">
      <app-lesson-info [lesson]="lesson" />
      <hr />
      <div class="btn">
        <button (click)="onEdit(id(), lesson)">Modifier</button>
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
export default class DetailLessonComponent implements OnInit {
  title = inject(Title);
  route = inject(Router);
  id = input('id');
  lesson!: Valid;
  private es = inject(UserService);
  ngOnInit(): void {
    this.lesson = this.es.idLesson(Number(this.id()));
    if (this.lesson) {
      this.title.setTitle(`${this.lesson.name}- mafunzo`);
    } else {
      this.route.navigate(['/']);
    }
  }
  onEdit(id: string, lesson: Valid) {
    lesson.id = id;
    this.route.navigate(['/addLesson'],{
      state: lesson
    })
  }
  onDelete(id: string) {
    this.es.onDeleteL(Number(id));
    this.route.navigate(['/lesson']);
  }
}
