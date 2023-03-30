import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lr-slotted-card',
  templateUrl: './slotted-card.component.html',
  styleUrls: ['./slotted-card.component.css','../../../styles.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SlottedCardComponent implements OnInit {

  constructor(private el: ElementRef ) {
    console.log(this.el.nativeElement.outerHTML);
  }
  ngOnInit() {
  }
}
