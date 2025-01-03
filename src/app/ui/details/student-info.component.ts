import { Component, input } from '@angular/core';
import { ok } from '../core/model/valid2.component';

@Component({
  selector: 'app-student-info',
  imports: [],
  template: `
  <br>
  <h4>nom: {{student().name}}</h4><br>
  <h4>email: {{student().email}}</h4><br>
  <h4>password: {{student().pass}}</h4><br>
  `,
  styles: ``
})
export default class StudentInfoComponent {
  student=input.required<ok>()
}


