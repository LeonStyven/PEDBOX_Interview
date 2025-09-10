import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Subreddit } from '../../interfaces/subreddit.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'subreddit-modal',
  imports: [DecimalPipe],
  templateUrl: './subreddit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SubredditModalComponent {
  @ViewChild('dlg') dialogRef!: ElementRef<HTMLDialogElement>;

  selectedSubreddit?: Subreddit;

  open(): void {
    this.dialogRef?.nativeElement?.showModal?.();
  }

  close(): void {
    this.dialogRef?.nativeElement?.close?.();
  }
}
