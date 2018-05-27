import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  diff = _.difference([1, 4, 5], [3, 1, 6, 4])
}
