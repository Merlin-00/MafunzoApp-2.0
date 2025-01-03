import { Component, input } from '@angular/core';
import { Valid } from '../core/model/valid-model.component';

@Component({
  selector: 'app-lesson-info',
  imports: [],
  template: `
  <br>
  <h3>nom: {{lesson().name}}</h3><br>
  <h3>date: {{lesson().date}}</h3><br>
  <h3>heure: {{lesson().time}}</h3><br>
  <h3>detail: {{lesson().detail}}</h3><br>
  `,
  styles: ``
})
export default class LessonInfoComponent {
  lesson=input.required<Valid>()
}



