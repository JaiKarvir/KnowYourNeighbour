import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'neighbour-app';
 
  navLinkSelected = 'Home' ;
  //navLinkSelected = 'Service-Provider' ; 
  OnLinkSelected(navLink: string){
  	this.navLinkSelected = navLink;
  }
}
