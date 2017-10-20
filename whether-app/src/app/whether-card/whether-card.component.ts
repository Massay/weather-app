import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-whether-card',
  templateUrl: './whether-card.component.html',
  styleUrls: ['./whether-card.component.css']
})
export class WhetherCardComponent implements OnInit {
@Input() w: any;
  constructor() { }

  ngOnInit() {
  }

}
