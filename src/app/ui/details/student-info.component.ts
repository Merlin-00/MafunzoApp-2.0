import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';

@Component({
  selector: 'app-student-info',
  imports: [ToolbarComponent],
  template: `
  <app-toolbar title="Etudient"/>
    <p>
      student-info works!
    </p>
  `,
  styles: ``
})
export default class StudentInfoComponent {

}
