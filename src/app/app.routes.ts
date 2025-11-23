import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { RouteService } from './ui/core/services/route.service';

export const routes: Routes = [
   {
      path:'home',
      title:'home',
      loadComponent:()=>import('./ui/home/home.component'),
      canActivate: [()=>inject(RouteService).isLogged()]
   },
   { 
    path:'login',
    title:'mafunzo-connexion',
    loadComponent: ()=>import('./ui/login/login.component')
   },
   { 
    path:'connexion',
    title:'connexion',
    loadComponent: ()=>import('./ui/ajouts/connexion.component')
   },
   {
    path: 'lesson',
    title: 'mafunzo-cours',
    loadComponent: ()=>import('./ui/home/lesson.component'),
    canActivate: [()=>inject(RouteService).isLogged()]
   },
   {
    path: 'student',
    title: 'mafunzo-students',
    loadComponent: ()=>import('./ui/home/student.component'),
    canActivate: [()=>inject(RouteService).isLogged()]
   },
   {
    path: 'addStudent',
    title: 'new-student',
    loadComponent: ()=>import('./ui/ajouts/add-student.component'),
    canActivate: [()=>inject(RouteService).isLogged()]
   },
   {
    path: 'addLesson',
    title: 'new-lesson',
    loadComponent: ()=>import('./ui/ajouts/add-lesson.component'),
    canActivate: [()=>inject(RouteService).isLogged()]
   },
   {
    path: 'studentDetail/:id',
    title: 'student-Detail',
    loadComponent: ()=>import('./ui/details/detail-student.component'),
    canActivate: [()=>inject(RouteService).isLogged()]
   },
   {
    path: 'lessonDetail/:id',
    title: 'lesson-Detail',
    loadComponent: ()=>import('./ui/details/detail-lesson.component'),
    canActivate: [()=>inject(RouteService).isLogged()]
   },
   {
      path:'',
      pathMatch: 'full',
      redirectTo:'login'
   },
   {
    path:'404',
    title:'page non trouvée',
    loadComponent:()=>import('./ui/notFound/not-found.component')
   },
   {
    path:'**',
    redirectTo:'404'
   }
];
