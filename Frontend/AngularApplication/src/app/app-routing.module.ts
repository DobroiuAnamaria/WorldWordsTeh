import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: TableComponent}
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
