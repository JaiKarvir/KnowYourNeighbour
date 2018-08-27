import { Component } from '@angular/core';
import { ProfessionalService } from '../professional/professional.service';
import { Professional } from '../professional/professional.model';

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
  loggedUser_id: number;

  constructor(private professionalService: ProfessionalService){

    professionalService.loggedUser.subscribe(professional_user => {
      if(professional_user != null){
        this.changeName(professional_user);
      }else{
        this.loggedUser = "NotLogged";
      }
     });
    
  }

changeName(professional_user: Professional){
  this.loggedUser = professional_user.p_email;
  this.loggedUser_id = professional_user.p_id;
}

onLogout(){
  this.professionalService.onProfessionalLogout();
}
}
