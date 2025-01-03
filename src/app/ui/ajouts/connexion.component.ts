import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-connexion',
  imports: [ToolbarComponent,FormsModule, RouterLink],
  template: `
  <app-toolbar title="connexion"/>
  <form  
      class="form-container" 
      #sessionForm="ngForm"
      (ngSubmit)="onsubmit(sessionForm)"
    >
      <label for="nom">votre nom:</label>
      <input type="text" placeholder="Nom complet" name="nom" required [(ngModel)]="formData.name">
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
export default class ConnexionComponent{
  formData={
    name:'',
    pass:'',
  };
  onsubmit(sessionForm: NgForm){
    console.log('Données du formulaire: ',sessionForm.value);
    sessionForm.reset();
  }

}
