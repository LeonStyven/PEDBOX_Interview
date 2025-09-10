import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'subreddit-modal',
  imports: [],
  templateUrl: './subreddit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SubredditModalComponent {
  @ViewChild('dlg') dialogRef!: ElementRef<HTMLDialogElement>;

  open(): void {
    this.dialogRef?.nativeElement?.showModal?.();
  }

  close(): void {
    this.dialogRef?.nativeElement?.close?.();
  }
}
