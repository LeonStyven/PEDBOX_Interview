import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SubredditsPageComponent } from "./subreddit/pages/subreddits-page/subreddits-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SubredditsPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frontend');
}
