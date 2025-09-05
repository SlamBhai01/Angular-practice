import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,              // ✅ Required for standalone components
  imports: [],                   // ✅ Use if you import other modules/components
  template:`<h1>Profile Component</h1>`,
styles: [`h1 { color: red; }`]  
})
export class Profile {

}
