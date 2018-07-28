import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
 @Output() navLinkSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(navLink: string){
  	this.navLinkSelected.emit(navLink);
  }
}
