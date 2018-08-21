import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfessionalService } from '../professional.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  professionalLoginForm : FormGroup;
  p_id: number;

  constructor(private professionalService: ProfessionalService, private router: Router, private route: ActivatedRoute) {}
 
  ngOnInit() {

  	 this.professionalLoginForm = new FormGroup({
  	'emailProfessional': new FormControl(null, [Validators.required, Validators.email/*, this.emailExistsValidator.bind(this)*/]),
  	'passwordProfessional': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)])
  	});

  }

  onSubmitLoginProfessional(){

    const profEmail = this.professionalLoginForm.value.emailProfessional;
    const profPassword = this.professionalLoginForm.value.passwordProfessional;
    if((this.p_id =this.professionalService.checkProfessionalExists(profEmail,profPassword)) != -1){ 
       this.router.navigate([this.p_id,'prof-homepage'],{relativeTo: this.route});
    }else{
      /*this.emailExistsValidator(this.professionalLoginForm.value.emailProfessional);*/
      console.log('Wrong username and password');
    }
  }

   /*emailExistsValidator(control: FormControl): {[s: string]: boolean} {
    	if(this.professionalService.getProfessional(control.value) != -1){
    		return {'emailExists': true};
    	}else{
    		return null;
    	}
    }*/
}
