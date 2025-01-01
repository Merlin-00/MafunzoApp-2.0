import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [],
  template: `
    <header class="container">
      <h1><span (click)="retour()"><</span>{{title()}}</h1> 
    </header>
  `,
  styles: `
  .container{
    border-bottom: 1px solid grey;
    margin: 20px;
    h1{
      color: chocolate;
      display: flex;
      gap: 30px;
      span{
        background: rgb(243, 183, 141);
        padding-left: 1%;
        padding-right: 1%;
      }
    }
  }
  `
})
export class ToolbarComponent {
  private route=inject(Router)
  retour(){
    localStorage.setItem('logged','true');
    this.route.navigate(['/'])
  }
  title= input.required<string>()
}
