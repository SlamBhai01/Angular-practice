import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  callFunction() {
    alert('Function call');
    this.otherFunction();
  }

  otherFunction() {
    console.log('Other Function Call');
  }
}
