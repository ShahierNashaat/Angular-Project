import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../Shared Classes and types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel:User = new User("","","","","");

  loginForm=this.fb.group({
    username :['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    password:['', [Validators.required]],
  })

  get username(){
    return this.loginForm.get("username");
  }

  get password(){
    return this.loginForm.get("password");
  }
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
