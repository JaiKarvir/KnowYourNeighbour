import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Professional } from '../professional.model';
import { ProfessionalService } from '../professional.service';
import { ProfessionalBusiness } from '../professional_service.model';


@Component({
  selector: 'app-prof-homepage',
  templateUrl: './prof-homepage.component.html',
  styleUrls: ['./prof-homepage.component.css'],
  providers: [ ProfessionalService ]
})
export class ProfHomepageComponent implements OnInit {

  id: number;
  professional: Professional;
  professional_business: ProfessionalBusiness[];

  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService) { }

  ngOnInit() {

  	this.route.params.subscribe(
  		(params: Params)=>{
  			this.id = +params['id'];
  		});

  	this.professional = this.professionalService.getProfessional(this.id);
  	this.professional_business = this.professional.p_service;
  }

}
