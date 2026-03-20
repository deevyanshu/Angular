import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'chathome', pathMatch: 'full'
    },
    {
        path: 'chathome', loadComponent: () => import('./pages/chat-home/chat-home').then(m => m.ChatHome)
    },
    {
        path: 'chat', loadComponent: () => import('./pages/chat/chat').then(m => m.Chat) 
    }
];
