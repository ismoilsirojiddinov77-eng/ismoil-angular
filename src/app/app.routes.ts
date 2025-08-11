import { Routes } from '@angular/router';
import path from 'path';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin/admin.component';
import { HamilionComponent } from './hamilion/hamilion.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'list', component: ListComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'hamilion', component: HamilionComponent }
];
