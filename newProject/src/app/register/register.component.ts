import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../customeValidators/confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  socials:string[];

  registerForm=this.fb.group({
    username :['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    email:['', [Validators.required, Validators.pattern(/^.*@.*$/)]],
    password:['', [Validators.required]],
    confirmPassword:['', [Validators.required]],
    socialField:['', Validators.required]
  }, {validators:[ConfirmPasswordValidator]})

  get username(){
    return this.registerForm.get("username");
  }

  get email(){
    return this.registerForm.get("email");
  }

  get password(){
    return this.registerForm.get("password");
  }

  get confirmPassword(){
    return this.registerForm.get("confirmPassword");
  }

  get socialField(){
    return this.registerForm.get("socialField");
  }

  constructor(private fb:FormBuilder) {
    this.socials = ["facebook", "twitter", "google"];
   }

  ngOnInit(): void {
  }

}
