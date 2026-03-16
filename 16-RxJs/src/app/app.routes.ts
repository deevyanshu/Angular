import { Routes } from '@angular/router';
import { Obs } from './obs/obs';
import { Operators } from './operators/operators';
import { Sub } from './sub/sub';

export const routes: Routes = [
    {path: 'observable', component: Obs},
    {path: 'operator', component: Operators},
    {path: 'subject', component: Sub}
];
