import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public clicked:boolean = false;
  public isClicked:boolean = false;
  constructor(private routing: Router){}
  img:string = "assets/images/footlog1.jpg";

  
  loginform:any = {};

  @ViewChild('f', {static:true}) f;

 onSubmit()
 {
  this.isClicked=true;
  // this.clicked=true;
  // console.log(this.f.value);
  this.routing.navigate(['submit']);
 }
 clickBtn()
 {
    this.isClicked=true;
 }
}
