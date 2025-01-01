import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';

@Component({
  selector: 'app-lesson-info',
  imports: [ToolbarComponent],
  template: `
  <app-toolbar title="Lesson"/>
    <p>
      lesson-info works!
    </p>
  `,
  styles: ``
})
export default class LessonInfoComponent {

}
