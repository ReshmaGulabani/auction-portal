import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/loginModel';
import { LoginService } from '../service/login.service';
import { BaseService } from '../../base.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new LoginModel();
  url = 'https://reqres.in/api/users';
  data;

  constructor(private base: BaseService) { }

  ngOnInit() {
    console.log(this.data);
  }

  submit() {
    console.log('Username is:' + this.loginModel.userName + '\n' + 'Password is:' + this.loginModel.password);
  }

  getData() {
    this.base.getResults(this.url).subscribe(data => this.data = data.data);
  }


  resetForm(form: NgForm) {
    form.resetForm();
  }

}
