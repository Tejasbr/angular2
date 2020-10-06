import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  img:string = "assets/images/footlog1.jpg";
  // loginform:any = {};
  public clicked = false;

  loginform: FormGroup;
  constructor(private fb: FormBuilder,private route: Router) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm()
  {
   this.loginform=this.fb.group({
        firstName: ['', Validators.maxLength(6)],
        email: [''],
        password: [''],
        BirthDate: [''],
        position: [''],
        Male: [''],
        Female: ['']
    });
  }
  get f()
  {
    return this.loginform.controls;
  }

  onSubmit()
 {
  this.clicked=true;
   console.log(this.loginform.value);
 }

}
