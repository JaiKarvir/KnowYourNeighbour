import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prof-service-item',
  templateUrl: './prof-service-item.component.html',
  styleUrls: ['./prof-service-item.component.css']
})
export class ProfServiceItemComponent implements OnInit {

	@Input() prof_business;
	@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
