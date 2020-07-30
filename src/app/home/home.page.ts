import { Component } from '@angular/core';

export interface User {
  email: string,
  password: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string;
  user: User;

  constructor() {
    this.title= "Home"
    this.user={
      email:'',
      password:'',
    }
  }
  navigateToPage2(){

  }
  getPromise(){
    let promise= new Promise((resolve, reject)=> {
      resolve('bonjour');

    })
  }

  OnSignIn(){
    console.log(this.user)
  }

} 
