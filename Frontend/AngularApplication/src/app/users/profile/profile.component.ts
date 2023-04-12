import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  @Input() user: User = new User({});
  badges: any[] = [];

  colors: any = {
    "none": "#000",
    "bronze": "#f80",
    "silver": "#aaa",
    "gold": "#0ff"
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.user = data[0];

        const points = this.user.points;
    
        if (points >= 0) {
          this.badges.push("none");
        }
    
        if(points >= 5) {
          this.badges.push("bronze");
        }
    
        if(points >= 30) {
          this.badges.push("silver");
        }
    
        if(points >= 100) {
          this.badges.push("gold");
        }
      }
    });

  }

}
