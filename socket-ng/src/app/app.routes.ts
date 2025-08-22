import { Routes } from '@angular/router';
import { Chat } from './componentes/chat/chat';

export const routes: Routes = [
    {path: 'chat/:userId', component: Chat},
    {path: '', redirectTo : 'chat/:ABC', pathMatch: 'full'}
];
