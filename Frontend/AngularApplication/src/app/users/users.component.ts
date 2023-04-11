import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { USERS } from '../mock-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {}

  selectedUser?: User;

  users: User[] = USERS;

  user: any = {
    id: 1,
    fullName: 'Windstorm',
  };
}
