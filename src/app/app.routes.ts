import { RedirectCommand, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component'

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'   
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:[
           {
             path:'dashboard',
             component: DashboardComponent
           }


        ]

        
    }



];
