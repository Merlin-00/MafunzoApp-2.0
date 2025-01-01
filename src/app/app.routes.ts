import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { RouteService } from './ui/services/route.service';

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
      path: 'connect',
      title: 'new-user',
      loadComponent: ()=>import('./ui/ajouts/new-user.component'),
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
    path: 'studentInfo/:id',
    title: 'student-info',
    loadComponent: ()=>import('./ui/details/student-info.component'),
    canActivate: [()=>inject(RouteService).isLogged()]
   },
   {
    path: 'lessonInfo/:id',
    title: 'lesson-info',
    loadComponent: ()=>import('./ui/details/lesson-info.component'),
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
