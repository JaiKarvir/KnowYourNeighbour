import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { ProfessionalService } from '../../professional.service';
import { ProfessionalBusiness } from '../../professional_service.model';

@Component({
  selector: 'app-prof-service-detail',
  templateUrl: './prof-service-detail.component.html',
  styleUrls: ['./prof-service-detail.component.css']
})
export class ProfServiceDetailComponent implements OnInit {

  id:number;
  prof_business: ProfessionalBusiness;

  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService, private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params: Params)=>{
  			this.id	= +params['id'];
 			this.prof_business = this.professionalService.getBusiness(this.id);
  		});
  }
  
  onEditService(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteService(){
    this.professionalService.deleteBusiness(this.id);
    this.router.navigate(['/professional',this.id,'prof-homepage'], {relativeTo: this.route});
  }
}
