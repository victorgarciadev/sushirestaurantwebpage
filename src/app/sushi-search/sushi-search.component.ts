import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Sushi } from '../sushi';
import { SushiService } from '../sushi.service';

@Component({
  selector: 'app-sushi-search',
  templateUrl: './sushi-search.component.html',
  styleUrls: ['./sushi-search.component.css']
})
export class SushiSearchComponent implements OnInit {

  sushi$!: Observable<Sushi[]>;
  
  private searchTerms = new Subject<string>();
  
  constructor(private sushiService: SushiService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.sushi$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.sushiService.searchSushi(term)),
    );
  }

}
