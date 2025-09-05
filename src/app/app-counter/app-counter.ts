import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,                       // ✅ Required for standalone
  imports: [],                            // ✅ Optional if no dependencies
  templateUrl: './app-counter.html',
  styleUrls: ['./app-counter.css']        // ✅ Correct property name
})
export class AppCounter {
  count = 0;

  Incre_Count() {
    this.count++;
    if (this.count == 10) {
      alert('Nice Porgess');
    }
  }
  Decre_Count() {
    if (0 < this.count) {
      this.count--;

    }
  }
  reset_count() {
    this.count = 0;
  }
  CallFunction() {
    console.log('div is active');
  }
   showInput(value: string) {
    alert("You typed: " + value);
  }
  name="";
  displayMsg=""
getName(event:Event){
this.name=(event.target as HTMLInputElement).value;

}
showName(){
  this.displayMsg=this.name;
}
}