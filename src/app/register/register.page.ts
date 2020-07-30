import { Component, OnInit } from '@angular/core';
import { RegisterServiceService, Utilisateur } from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: Utilisateur;

  constructor(private userService: RegisterServiceService) {

    this.user={
      nom: '',
      prenom: '',
      passe:'',
      email:'',
      ville:''
    }
   }

  ngOnInit() {
  }

  addUser(){
    // this.userService.addUser(this.user)
    console.log(this.user)
  }

}
