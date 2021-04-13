import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from '../Shared Classes and types/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUser[];
  constructor(private usersService:UsersService) { 
    this.usersService.getAllUsers().subscribe(
      data=>
      {
      this.users = data
      },
      err=>
      {
        console.log(err)
      }
    );
  }

  ngOnInit(): void {
  }

}
