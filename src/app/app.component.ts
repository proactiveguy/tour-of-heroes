import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from "./messages/messages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
