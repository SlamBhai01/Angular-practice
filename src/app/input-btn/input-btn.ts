import { Component } from '@angular/core';

@Component({
  selector: 'app-input-btn',
  standalone: true,               // ✅ Required for standalone usage
  imports: [],                    // ✅ Keep if you use other components/pipes
  templateUrl: './input-btn.html',
  styleUrls: ['./input-btn.css']  // ✅ Corrected property name
})
export class InputBtn { 
  displayDiv=false;
  showName(){
this.displayDiv=true;
  }
   hideName(){
this.displayDiv=false;
  }
  toggleDisplay() {
    this.displayDiv = !this.displayDiv;
  }
  color:string="red";
handlecolor(val :string) {
 this.color=val;
}

}
