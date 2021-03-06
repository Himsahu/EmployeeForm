import { identifierModuleUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailsComponent } from './register/employee-details/employee-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes=[
    
    {path:'home', component: HomeComponent},
    {path: 'employee', component: RegisterComponent},
    {path: 'employee/:id', component: EmployeeDetailsComponent},
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path:'**', component: PagenotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}