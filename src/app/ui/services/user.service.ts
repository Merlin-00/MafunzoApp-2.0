import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  cours: string[]=[]
  students: string[]=[]
  addCours(newCo: string){
    this.cours.push(newCo);
  }
  addStudents(newSd: string){
    this.cours.push(newSd);
  }
}
