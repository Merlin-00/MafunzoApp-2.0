import { Injectable } from '@angular/core';
import { Valid } from '../model/valid-model.component';
import { ok } from '../model/valid2.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  cours: Valid[]=[]
  students: ok[]=[]
  addCours(newCo: Valid){
    this.cours.push(newCo);
  }
  addStudents(newSd: ok){
    this.students.push(newSd);
  }
  getLesson=()=>this.cours
  getStudent=()=>this.students
  idLesson=(index: number)=>this.cours[index]
  idStudent=(index: number)=>this.students[index]
  onEditL=(i:number,e:Valid)=>this.cours[i]=e
  onEditS=(i:number,e:ok)=>this.students[i]=e
  onDeleteL=(index:number)=>this.cours.splice(index,1)
  onDeleteS=(index:number)=>this.students.splice(index,1)
}
