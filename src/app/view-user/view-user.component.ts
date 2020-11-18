import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

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
    console.log('in view');
    this.items = this.userService.getUser();
    console.log(this.items);
  }
  
  results() {
    new ngxCsv(this.items, 'My Report');
  }
}
