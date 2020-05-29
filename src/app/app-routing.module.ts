import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './_guards/auth.guard'

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentViewerComponent } from './components/document-viewer/document-viewer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { AllRolesComponent } from './components/roles/all-roles/all-roles.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'roles/add', component: AddRoleComponent },
  { path: 'roles/all', component: AllRolesComponent },
  { path: 'document-viewer', component: DocumentViewerComponent },
  //{ path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: 'login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
