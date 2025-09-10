import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../../subreddit/services/search.service';

@Component({
  selector: 'navbar',
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private readonly search: SearchService) {}

  onSearchInput(value: string) {
    this.search.setTerm(value.trim());
  }
}
