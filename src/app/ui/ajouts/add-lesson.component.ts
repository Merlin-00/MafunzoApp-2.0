import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-lesson',
  imports: [ToolbarComponent,FormsModule],
  template: `
  <app-toolbar title="Ajouter une Lesson"/>
  <form  
      class="form-container" 
      #sessionForm="ngForm"
      (ngSubmit)="onsubmit(sessionForm)"
    >
      <label for="nom">votre nom:</label>
      <input type="text" placeholder="Nom complet" name="nom" required [(ngModel)]="formData.name">
      <label for="date">date de la session:</label>
      <input type="date" name="date" required [(ngModel)]="formData.date">
      <label for="time">heure de la session:</label>
      <input type="time" name="time" required [(ngModel)]="formData.time">
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
export default class AddLessonComponent {
  formData={
    name:'',
    date:'',
    time:'',
  };
  onsubmit(sessionForm: NgForm){
    console.log('Données du formulaire: ',sessionForm.value);
    sessionForm.reset(); 
  }

}
