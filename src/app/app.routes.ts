import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo:'job-experience', pathMatch:'full' },
    { path: 'job-experience', loadComponent: () => import('./components/job-experience/job-experience.component').then(m => m.JobExperienceComponent) },
    { path: 'movies', loadComponent: () => import('./components/movies/movies.component').then(m => m.MoviesComponent) },
    { path: 'date', loadComponent: () => import('./components/date/date.component').then(m => m.DateComponent) },
    { path: 'calendar', loadComponent: () => import('./components/calendar/calendar.component').then(m => m.CalendarComponent) },
    { path: 'matcher-indicator', loadComponent: () => import('./components/matcher-indicator-parent/matcher-indicator-parent.component').then(m => m.MatcherIndicatorParentComponent) },
];