import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Login } from '../model/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login = new Login('', '');

  formLogin = this.fb.group({
    name: [this.login.user, Validators.pattern('[A-Za-z]+')],
    pwd: [this.login.pwd, Validators.min(6)]
  })

  onSubmit = () => {
    this.loginService.doLogin(this.formLogin.value).subscribe();
  }

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {}

  get name() { return this.formLogin.get('name'); }
  get pwd() { return this.formLogin.get('pwd'); }

}
