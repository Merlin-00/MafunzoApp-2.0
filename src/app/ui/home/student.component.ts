import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';

@Component({
  selector: 'app-student',
  imports: [ToolbarComponent],
  template: `
  <app-toolbar title="Liste d'étudients"/>
    <p>
      student works!
    </p>
  `,
  styles: ``
})
export default class StudentComponent {

}
