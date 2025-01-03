import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  template: `
  <h1 class="not">
    404
  </h1>
  <p>page not found</p>
  `,
  styles: `
  .not{
    color: white;
    text-align: center;
    font-size: 500px;
  }
  p{
    font-size: 50px;
  }
  `
})
export default class NotFoundComponent {

}
