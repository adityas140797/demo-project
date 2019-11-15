import { CanActivate } from '@angular/router';

export const routes = [
  { path: 'project', loadChildren: './project/project.module#ProjectModule'}
];
