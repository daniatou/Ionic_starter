import { Component, OnInit } from '@angular/core';

export interface User {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User;

  constructor() { 
    this.user={
      email:'',
      password:'',
    }
  }

  ngOnInit() {
  }

  OnSignIn(){
    console.log(this.user)
  }


}
