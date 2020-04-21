import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.scss']
})

export class SelectizeComponent implements AfterViewInit {

  @ViewChild('input', null) input: ElementRef;
  public posts$;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event['target'].value),
        debounceTime(7000),
        distinctUntilChanged(),
        switchMap(value => this.dataService.getByText({text: value}))
      ).subscribe(results => {
      this.posts$ = results;
    });
  }


}
