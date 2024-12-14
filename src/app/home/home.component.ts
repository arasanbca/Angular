import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name="ARASAN"

  data="HELLO"

  a=null
  b=true
  c=false
  d=true
  e=false

  A=0
  B=0

  plus(){
    this.A++;
  }
  minus(){
    this.A--;
  }

  v1='HEllo';
  v2='';
  cl='red';
  cl1="green"
  ab(event:any){
    this.v1=(event.target as HTMLInputElement).value;
  }

}
