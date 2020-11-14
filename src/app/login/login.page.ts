import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public nome: string;
  constructor() { }


  ngOnInit() {
  }


  public logar() {
    console.log(this.nome);
  }

 
}
