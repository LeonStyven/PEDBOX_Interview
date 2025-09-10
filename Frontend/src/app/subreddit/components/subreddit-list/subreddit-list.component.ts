import { DecimalPipe } from '@angular/common';
import { Subreddit } from './../../interfaces/subreddit.interface';
import { Component, input } from '@angular/core';


@Component({
  selector: 'subreddit-list',
  imports: [DecimalPipe],
  templateUrl: './subreddit-list.component.html',
})
export class SubredditListComponent {
  subreddits = input.required<Subreddit[]>();

  errorMessage = input<string|unknown|null>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)

}
