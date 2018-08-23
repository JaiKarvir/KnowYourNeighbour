import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfessionalService } from '../../professional.service';

@Component({
  selector: 'app-prof-service-edit',
  templateUrl: './prof-service-edit.component.html',
  styleUrls: ['./prof-service-edit.component.css']
})
export class ProfServiceEditComponent implements OnInit {

  serviceForm: FormGroup;	
  editMode = false;
  id: number;

  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];  
        this.editMode = params['id'] !=null;
      });
    this.onInitForm();
  }

  onInitForm(){

    let title = '';
    let main_category = '';
    let sub_category = '';
    let imagePath = '';
    let rate : number;
    let description = '';
     

    if(this.editMode){
      const prof_service = this.professionalService.getBusiness(this.id);
      title = prof_service.heading;
      main_category = prof_service.main_category;
      sub_category = prof_service.sub_category; 
      imagePath = prof_service.images; 
      rate = prof_service.rate;
      description = prof_service.description; 
    }

    this.serviceForm = new FormGroup({
      'title': new FormControl(title),
      'main_category': new FormControl(main_category),
      'sub_category': new FormControl(sub_category),
      'imagePath': new FormControl(imagePath),
      'rate': new FormControl(rate),
      'description': new FormControl(description)
    });
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  
  onSubmit(){
    if(this.editMode){
      this.professionalService.updateBusiness(this.id,
                                              this.serviceForm.value['main_category'],
                                              this.serviceForm.value['sub_category'],
                                              this.serviceForm.value['title'],
                                              this.serviceForm.value['description'],
                                              this.serviceForm.value['imagePath'],
                                              this.serviceForm.value['rate']);
    }else{
      this.professionalService.saveBusiness(this.serviceForm.value['main_category'],
                                              this.serviceForm.value['sub_category'],
                                              this.serviceForm.value['title'],
                                              this.serviceForm.value['description'],
                                              this.serviceForm.value['imagePath'],
                                              this.serviceForm.value['rate']);
    }
    this.onCancel();
  }
}
