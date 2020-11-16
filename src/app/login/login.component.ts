import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  checkoutForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    hobby: new FormControl(),
  });
  // public show: boolean = true;
  // public toggleText: string = "Show";

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Process checkout data here
    this.userService.add({
      firstName: this.checkoutForm.get("firstName").value,
      lastName: this.checkoutForm.get("lastName").value,
      hobby: this.checkoutForm.get("hobby").value
    });
    // this.show = !this.show;
    // this.toggleText = this.show ? "Hide" : "Show";

    this.checkoutForm.reset();
    console.warn('Your has been submitted');
  }

  // public onToggle(): void {
  //   this.show = !this.show;
  //   this.toggleText = this.show ? "Hide" : "Show";
  // }
}
