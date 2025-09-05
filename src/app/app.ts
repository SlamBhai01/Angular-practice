import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputBtn } from './input-btn/input-btn';  // confirm path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputBtn],  // standalone imports
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('App Counter');
}
