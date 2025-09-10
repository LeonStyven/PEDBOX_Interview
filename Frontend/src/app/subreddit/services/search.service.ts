import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly termSubject = new BehaviorSubject<string>('');
  readonly term$: Observable<string> = this.termSubject.asObservable();

  setTerm(term: string): void {
    this.termSubject.next(term ?? '');
  }
}


