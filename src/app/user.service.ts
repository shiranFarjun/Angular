import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor() { }
  items = [];

  add(user) {
    // this.items.push(user);
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      console.log(users);
      users = [...users, user]; // this row make error
    } else {
      users = [user]
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  getUser() {
    // return this.items;
    if (!localStorage.getItem('Users')) {
      return this.items = [];
    } else {
      this.items = JSON.parse(localStorage.getItem('Users'));
      console.log(this.items);
      return this.items
    }
  }

  clear() {
    this.items = [];
    return this.items;
  }
}



