import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { Column } from './column';
import { UserService } from '../user.service';
import { TableUser } from './table-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  cols: Column[] = [
    new Column("place"),
    new Column("name"),
    new Column("points"),
  ];

  users: TableUser[] = [];

  constructor(private userService: UserService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = this.mapToTableUser(data);
      },
      error: (error) => {
        this.toastr.error(`Failed Loading Users: ${error.error}`);
      }
    });
  }

  private mapToTableUser(users: User[]): TableUser[] {
    const mappedUsers = users.map(user => new TableUser(users.indexOf(user) + 1, user.name, user.points));
    return mappedUsers.sort((a, b) => b.points - a.points);
  }
}
