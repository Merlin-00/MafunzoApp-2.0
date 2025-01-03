import { Component, inject, OnInit } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { Valid } from '../core/model/valid-model.component';

@Component({
  selector: 'app-add-lesson',
  imports: [ToolbarComponent, ReactiveFormsModule],
  template: `
  <app-toolbar title="Ajouter une Lesson"/>
  <form  
      class="form-container"
      [formGroup]="formData"
      (ngSubmit)="onsubmit()"
    >
    @let controls= formData.controls;
      <label for="nom">votre nom:</label>
      <input type="text" placeholder="Nom complet" name="nom" formControlName="name">
      @if (controls.name.hasError('required') && controls.name.touched) {
      <span class="erreur">ce champ est obligatoire</span>
      }
      <label for="date">date de la session:</label>
      <input type="date" name="date" formControlName="date">
      @if (controls.date.hasError('required') && controls.date.touched) {
      <span class="erreur">ce champ est obligatoire</span>
      }
      <label for="time">heure de la session:</label>
      <input type="time" name="time" required formControlName="time">
      @if (controls.time.hasError('required') && controls.time.touched) {
      <span class="erreur">ce champ est obligatoire</span>
      }
      <label for="detail">detail de la session:</label>
      <textarea name="detail" placeholder="infos concernant la session" formControlName="detail"></textarea>
      @if (controls.detail.hasError('required') && controls.detail.touched) {
      <span class="erreur">ce champ est obligatoire</span>
      }
      <div align="end">
        <button type="submit">Soumettre</button>
      </div>
    </form>
  `,
  styles: `
    .erreur{
      color: red;
    }
  `
})
export default class AddLessonComponent implements OnInit{
  formu= inject(FormBuilder)
  formData= this.formu.nonNullable.group(
    {
    name:['', [Validators.required]],
    date:['',[Validators.required]],
    time:['',[Validators.required]],
    detail:['',[Validators.required]]
  });
  route = inject(Router)
  ls= inject(UserService)
  ngOnInit(): void {
    if (history.state.name) {
      const lesson= history.state as Valid
      this.formData.patchValue(lesson)
    } 
  }
  onsubmit(){
    if (this.formData.valid) {
      const lesson: Valid = {
        ...this.formData.getRawValue(),
      };
      if (history.state.id) {
        const id= Number(history.state.id)
        this.ls.onEditL(id, lesson)
      }else{
        this.ls.addCours(lesson)
      }
      this.route.navigate(['/lesson'])
    }else{
      this.formData.markAllAsTouched();
    }
  }

}
