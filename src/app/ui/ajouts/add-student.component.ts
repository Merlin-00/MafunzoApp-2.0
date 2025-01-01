import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [ToolbarComponent,FormsModule],
  template: `
  <app-toolbar title="Ajouter un étudient"/>
  <form  
      class="form-container" 
      #sessionForm="ngForm"
      (ngSubmit)="onsubmit(sessionForm)"
    >
      <label for="nom">nom de l'étudient:</label>
      <input type="text" placeholder="Nom complet" name="nom" required [(ngModel)]="formData.name">
      <label for="email">adresse email:</label>
      <input type="email" name="email" required [(ngModel)]="formData.email">
      <label for="nombre">nombre des sessions:</label>
      <input type="number" name="nombre" required [(ngModel)]="formData.session">
      <div align="end">
        <button type="submit" [disabled]="sessionForm.invalid" [class.invalidForm]="sessionForm.invalid">Soumettre</button>
      </div>
    </form>
  `,
  styles: `
  .form-container{
    max-width: 720px;
    margin: auto;

    input, textarea{
      width: 100%;
      font-size: 1rem;
      margin: 1rem 0;
      padding: 0.5rem;
    }

    .invalidForm{
      background-color: grey;
      opacity: 0.5;
    }

    input:user-valid,
    textarea:user-valid{
      border-color:green;
    }
    input:user-invalid,
    textarea:user-invalid{
      border-color: red;
    }
  }
  `
})
export default class AddStudentComponent{
  formData={
    name:'',
    email:'',
    session:'',
  };
  onsubmit(sessionForm: NgForm){
    console.log('Données du formulaire: ',sessionForm.value);
    sessionForm.reset();
  }

}
