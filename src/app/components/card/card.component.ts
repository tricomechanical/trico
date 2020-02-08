import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() cardClass: string = '';
  @Input() cardTitle: string = '';
  @Input() darkerBackground: boolean = false;
  @Input() border: boolean = false;

  ngOnInit(): void {
  }

}
