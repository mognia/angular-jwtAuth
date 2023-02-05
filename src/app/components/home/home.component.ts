import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
export interface User {
  id:string,
  email:string,
  first_name:string,
  last_name:string,
  avatar:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email'];
  dataSource: User[] | undefined;
  err = false
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.userService.getUsers().subscribe(data=>{
      this.dataSource = data.data
      console.log(data)
    },
      error => {
      this.err = true
      })
  }
}
