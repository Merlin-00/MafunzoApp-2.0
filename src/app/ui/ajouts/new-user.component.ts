import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-user',
  imports: [ToolbarComponent,FormsModule, RouterLink],
  template: `
  <app-toolbar title="Ajouter un étudient"/>
  <form  
      class="form-container" 
      #sessionForm="ngForm"
      (ngSubmit)="onsubmit(sessionForm)"
    >
      <label for="nom">votre nom:</label>
      <input type="text" placeholder="Nom complet" name="nom" required [(ngModel)]="formData.name">
      <label for="email">adresse email:</label>
      <input type="email" name="email" required [(ngModel)]="formData.email">
      <label for="pass">mot de passe:</label>
      <input type="password" name="pass" required [(ngModel)]="formData.pass">
      <div align="end">
        <button type="submit" [routerLink]="'/home'" [disabled]="sessionForm.invalid" [class.invalidForm]="sessionForm.invalid">Soumettre</button>
      </div>
    </form>
  `,
  styles: `

  `
})
export default class NewUserComponent {
  formData={
    name:'',
    email:'',
    pass:'',
  };
  onsubmit(sessionForm: NgForm){
    console.log('Données du formulaire: ',sessionForm.value);
    sessionForm.reset();
  }

}
