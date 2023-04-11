import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ProfileComponent } from './users/profile/profile.component';
import { GameContainerComponent } from './game-container/game-container.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: RegisterComponent },
  { path: 'dashboard', component: TableComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'game', component: GameContainerComponent},
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
