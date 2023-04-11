
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './users/profile/profile.component';
import { BadgeComponent } from './users/profile/badge/badge.component';
import { GameComponent } from './game/game.component';
import { TimerComponent } from './game/timer/timer.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { GameSummaryComponent } from './game-container/game-summary/game-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent,
    TableComponent,
    HomeComponent,
    ProfileComponent,
    BadgeComponent,
    GameComponent,
    TimerComponent,
    GameContainerComponent,
    GameSummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, TableModule, ToastrModule.forRoot()],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
