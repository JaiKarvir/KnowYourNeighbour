import { Component } from '@angular/core';
import { ProfessionalService } from '../professional/professional.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
	appTitle = "KnowYourNeighbour";
  	home = "Home";
  	signInUp = "Sign In/Up";

  	loggedUser = "NotLogged";

  	constructor(private professionalService: ProfessionalService){
  		 professionalService.loggedUser.subscribe(name => this.changeName(name));
  	}

  	changeName(name: string){
  		this.loggedUser = name;
  	}

}
