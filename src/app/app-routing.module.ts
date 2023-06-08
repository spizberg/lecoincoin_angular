import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SaleadListComponent } from './salead-list/salead-list.component';
import  { LoginGuard } from './login.guard'
import { SaleadDetailComponent } from './salead-detail/salead-detail.component';
// import { SaleadEditComponent } from './salead-edit/salead-edit.component';
import { SaleadAddComponent } from './salead-add/salead-add.component';

const routes: Routes = [
  { path: "login", component:LoginComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: "list", component:SaleadListComponent, canActivate : [LoginGuard]},
  { path: "add", component:SaleadAddComponent, canActivate : [LoginGuard]},
  { path: "show/:id", component:SaleadDetailComponent, canActivate : [LoginGuard]},
  // { path: "edit/:id", component:SaleadEditComponent, canActivate : [LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
