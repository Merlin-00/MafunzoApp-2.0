import { Component, inject } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  imports: [ToolbarComponent,FormsModule],
  template: `
  <app-toolbar title="connect"/>
  <form  
      class="form-container" 
    >
      <label for="nom">votre nom:</label>
      <input type="text" placeholder="Nom complet" name="nom" required [(ngModel)]="data.name">
      <label for="email">adresse email:</label>
      <input type="email" name="email" required [(ngModel)]="data.email">
      <label for="pass">mot de passe:</label>
      <input type="password" name="pass" required [(ngModel)]="data.pass">
      <button type="submit" (click)="onsubmit()">Soumettre</button>
    </form>
  `,
  styles: `

  `
})
export default class NewUserComponent {
  data={
    name:'',
    email:'',
    pass:'',
  };
  private route= inject(Router)
  onsubmit(){
    this.route.navigate(['/home'])
  }

}
