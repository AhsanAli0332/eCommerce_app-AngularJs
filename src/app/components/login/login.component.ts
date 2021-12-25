import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showPassword = false;
  
  User: any = ['Admin', 'User']
  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['', Validators.required]
    });
   }
  //  validatorPassword(fc: FormControl) {
  //   const value = fc.value as string;
  //   const isInvalid = 'password' === value.trim().toLowerCase();
  //   return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
  // }

  ngOnInit(): void {
  }

  // Getter method to access formcontrols
  get cityName() {
    return this.loginForm.get('userName');
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue());
  } else {
      console.log('There is a problem with the form');
   }
  }
}