import { SubredditService } from './../../services/subreddit.service';
import { Component, inject, resource, ViewChild, computed, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SubredditListComponent } from "../../components/subreddit-list/subreddit-list.component";
import { firstValueFrom } from 'rxjs';
import { SubredditModalComponent } from '../../components/subreddit-modal/subreddit-modal.component';
import { Subreddit } from '../../interfaces/subreddit.interface';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'subreddits-page',
  imports: [SubredditListComponent, SubredditModalComponent],
  templateUrl: './subreddits-page.component.html',
})
export class SubredditsPageComponent {

  SubredditService = inject(SubredditService);
  search = inject(SearchService);

  @ViewChild(SubredditModalComponent) modal!: SubredditModalComponent;
  selected?: Subreddit;

  subredditResource = resource({
    params: () => ({}),
    loader: async() => {
      return await firstValueFrom(
        this.SubredditService.getAllSubreddits()
      )
    }
  })

  term = toSignal(this.search.term$, { initialValue: '' });

  filteredSubreddits: Signal<Subreddit[]> = computed(() => {
    const term = (this.term() ?? '').toLowerCase();
    const list = this.subredditResource.value() ?? [];
    if (!term) return list;
    return list.filter(s => s.name.toLowerCase().includes(term));
  });

  updateSubreddits() {
    this.SubredditService.updateSubreddits();
  }

  onOpenDetails(_sub: Subreddit) {
    this.selected = _sub;
    this.modal?.open();
  }

}
