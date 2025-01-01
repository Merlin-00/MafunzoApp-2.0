import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';

@Component({
  selector: 'app-lesson',
  imports: [ToolbarComponent],
  template: `
  <app-toolbar title="Liste des cours"/>
    <p>
      lesson works!
    </p>
  `,
  styles: ``
})
export default class LessonComponent {

}
