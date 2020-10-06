import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  image1:string = "assets/images/football2.jpg";
  image2:string = "assets/images/greenland1.jpg";
  image3:string = "assets/images/lasvegas3.jpg";


  public color: String = "black";
  constructor(private route: Router) { }

  
  ngOnInit(): void {
  }

  
}
