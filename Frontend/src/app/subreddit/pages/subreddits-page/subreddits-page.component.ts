import { SubredditService } from './../../services/subreddit.service';
import { Component, inject, resource } from '@angular/core';
import { SubredditListComponent } from "../../components/subreddit-list/subreddit-list.component";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'subreddits-page',
  imports: [SubredditListComponent],
  templateUrl: './subreddits-page.component.html',
})
export class SubredditsPageComponent {

  SubredditService = inject(SubredditService);

  subredditResource = resource({
    params: () => ({}),
    loader: async() => {
      return await firstValueFrom(
        this.SubredditService.getAllSubreddits()
      )
    }
  })

}
