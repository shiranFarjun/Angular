import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})

export class ViewUserComponent implements OnInit {
  items;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    console.log('in view');//this.userService.getUser()
    this.items = this.userService.getUser();
    console.log(this.items);

  }

  onSelect(user): void {
    console.log('on click select',user);
  }

}
