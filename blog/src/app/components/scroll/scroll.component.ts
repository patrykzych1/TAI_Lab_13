import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  disp = "none";
  constructor() { }

  ngOnInit() {

  }

  public goToTop() {
    console.log("1")
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll')
   showTopButton() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      this.disp = "block";
    } else {
      this.disp = "none";
    }
  }
}
