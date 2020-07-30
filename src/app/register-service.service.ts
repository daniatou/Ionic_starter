import { Injectable } from '@angular/core';

export interface Utilisateur{
  nom: string,
  prenom: string,
  passe:string,
  email:string,
  ville:string,
}

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  users: Utilisateur[];

  constructor() { }

  getAllUsers(){
    return this.users;
  }

  addUser(user:Utilisateur){
    let promise= new Promise((resolve, reject)=>{
      this.users.push(user);
      resolve('Nouvel utilsateur ajouté')

    })
    return promise;
  }

}
