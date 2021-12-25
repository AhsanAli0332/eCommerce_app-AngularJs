
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg:String = '';
  registerForm!: FormGroup;
  submitted = false;


  User: any = ['Admin', 'User']

  constructor(
    private fb: FormBuilder,
    private customValidator: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required])],
      userType: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }


  add(){
    if(this.registerForm.valid){
      this.customValidator.userList.push(this.registerForm.value);
      
      // this.resetForm();
      console.log('this.productService.productlost',this.customValidator.getUsers())
      console.log("UserList", this.customValidator.userList);
    }
      else {
      this.msg = 'Please complete form'
    }
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
      this.registerForm.reset();
      this.router.navigate(['login']);
    }
  }
}
