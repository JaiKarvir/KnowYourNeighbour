import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalBusiness } from '../../professional_service.model';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-prof-services-list',
  templateUrl: './prof-services-list.component.html',
  styleUrls: ['./prof-services-list.component.css']
})
export class ProfServicesListComponent implements OnInit {

 @Input() professional_services: ProfessionalBusiness;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNewService(){
  	this.router.navigate(['new'],{relativeTo: this.route});
  }
}
