import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule, RouterLink],
  template: `
  <h1><span routerLink="/"><</span>connexion</h1> 
  <form  
      class="form-container" 
      #sessionForm="ngForm"
      (ngSubmit)="onsubmit(sessionForm)"
    >
      <label for="nom">votre nom:</label>
      <input type="text" placeholder="Nom complet" name="nom" required [(ngModel)]="formData.name">
      <label for="pass">mot de passe:</label>
      <input type="password" name="pass" required [(ngModel)]="formData.pass">
      <button type="submit" [routerLink]="'/home'">Soumettre</button>
    </form>
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
