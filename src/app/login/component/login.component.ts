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

  loginService:LoginService;

  formLogin = this.fb.group({
    name: ['', Validators.required],
    pwd: ['', Validators.required]
  })

  onSubmit = () => {
    this.loginService.doLogin(new Login(this.formLogin.value.name, this.formLogin.value.pwd))
      .subscribe();
  }

  constructor(private fb: FormBuilder, loginService: LoginService) {
    this.loginService = loginService
   }

  ngOnInit(): void {
  }

}
