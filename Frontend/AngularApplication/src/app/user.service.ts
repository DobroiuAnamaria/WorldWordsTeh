import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static readonly USER_BASE_PATH = 'https://localhost:7026/Users';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }

  register(user: User){
    return this.http.post<number>(`${UserService.USER_BASE_PATH}`, {
      name: user.name,
      email: user.email,
      password: user.password,
      role: "user",
      points: user.points || 0,
    });
  }

  updatePoints(id: number, points: number) {
    return this.http.patch<User>(`${UserService.USER_BASE_PATH}/${id}`, points);
  }

  getUsers() {
    return this.http.get<User[]>(`${UserService.USER_BASE_PATH}`);
  }
}
