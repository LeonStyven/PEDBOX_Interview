import { SubredditService } from './../../services/subreddit.service';
import { Component, inject, resource, ViewChild } from '@angular/core';
import { SubredditListComponent } from "../../components/subreddit-list/subreddit-list.component";
import { firstValueFrom } from 'rxjs';
import { SubredditModalComponent } from '../../components/subreddit-modal/subreddit-modal.component';
import { Subreddit } from '../../interfaces/subreddit.interface';

@Component({
  selector: 'subreddits-page',
  imports: [SubredditListComponent, SubredditModalComponent],
  templateUrl: './subreddits-page.component.html',
})
export class SubredditsPageComponent {

  SubredditService = inject(SubredditService);

  @ViewChild(SubredditModalComponent) modal!: SubredditModalComponent;

  subredditResource = resource({
    params: () => ({}),
    loader: async() => {
      return await firstValueFrom(
        this.SubredditService.getAllSubreddits()
      )
    }
  })

  onOpenDetails(_sub: Subreddit) {
    this.modal?.open();
  }

}
