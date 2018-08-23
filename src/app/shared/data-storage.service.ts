import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Professional } from '../professional/professional.model';
import 'rxjs/Rx';
//import { ProfessionalService } from '../professional/professional.service';

@Injectable()
export class DataStorageService{
	constructor(private http: Http){}

	storeProfessionals(professionals: Professional[]){
		return this.http.put('https://ng-know-your-neighbour.firebaseio.com/professionals.json',professionals);
	}

	getProfessionals(){
		return this.http.get('https://ng-know-your-neighbour.firebaseio.com/professionals.json').map(
		 	(response: Response)=>{
		 		const professionals: Professional[] = response.json();
		 		return professionals;
		 	})/*.subscribe( 
		 	(professionals: Professional[])=>{
				//this.professionalService.setProfessionals(professionals);
			})*/;
	}
}