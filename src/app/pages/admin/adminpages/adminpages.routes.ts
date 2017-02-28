import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpagesComponent } from './adminpages.component';

const routes: Routes = [
    {path: 'adminpages', redirectTo: 'dashboard', pathMatch: 'full'},
    {
        component: DashboardComponent,
        path: 'dashboard'
    }
];

export const adminrouting: ModuleWithProviders = RouterModule.forChild(routes);