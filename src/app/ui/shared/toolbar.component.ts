import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: `
    <h1><span routerLink="/home"><</span>{{title()}}</h1> 
  `,
  styles: `
  h1{
    color: white;
    margin: 0 auto;
    padding: 1%;
    width: 90%;
    display: flex;
    gap: 1rem;
    background-color: rgb(245, 165, 107);
    margin-bottom: 3%;
    span{
      padding-left: 1%;
      padding-right: 1%;
      background: white;
      color: rgb(245, 165, 107);
      cursor: pointer;
    }
}
  `
})
export class ToolbarComponent {
  title= input.required<string>()
}


