import { Component, inject, OnInit } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { ok } from '../core/model/valid2.component';


@Component({
  selector: 'app-add-student',
  imports: [ToolbarComponent, ReactiveFormsModule],
  template: `
  <app-toolbar title="Ajouter un étudient"/>
  <form  
      class="form-container"
      [formGroup]="formData"
      (ngSubmit)="onsubmit()"
    >
    @let controls= formData.controls;
      <label for="nom">nom de l'étudient:</label>
      <input type="text" placeholder="Nom complet" name="nom" formControlName="name">
      @if (controls.name.hasError('required') && controls.name.touched) {
      <span class="erreur">ce champ est obligatoire</span>
      }
      <label for="email">adresse email:</label>
      <input type="email" name="email" formControlName="email">
      @if (controls.email.hasError('required') && controls.email.touched) {
      <span class="erreur">ce champ est obligatoire</span>
      }
      <label for="pass">mot de passe:</label>
      <input type="password" name="pass" required formControlName="pass">
      @if (controls.pass.hasError('required') && controls.pass.touched) {
      <span class="erreur">ce champ est obligatoire</span>
      }
      <button type="submit">Soumettre</button>
    </form>
  `,
  styles: `
  .erreur{
    color: red;
  }
  `
})
export default class AddStudentComponent implements OnInit{
  formu= inject(FormBuilder)
  formData= this.formu.nonNullable.group(
    {
    name:['', [Validators.required]],
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required]],
  });
  route = inject(Router)
  st= inject(UserService)
  ngOnInit(): void {
    if (history.state.name) {
      const student= history.state as ok
      this.formData.patchValue(student)
    } 
  }
  onsubmit(){
    if (this.formData.valid) {
      const student: ok = {
        ...this.formData.getRawValue(),
      };
      if (history.state.id) {
        const id= Number(history.state.id)
        this.st.onEditS(id, student)
      }else{
        this.st.addStudents(student)
      }
      this.route.navigate(['/student'])
    }else{
      this.formData.markAllAsTouched();
    }
  }

}

