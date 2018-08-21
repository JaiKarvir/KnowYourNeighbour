import { Professional } from './professional.model';
import { ProfessionalContact } from './professional_contact.model';
import { ProfessionalBusiness } from './professional_service.model';

export class ProfessionalService{

    p_id: number;
    selected_professional: Professional;
	private professionals: Professional[]= [
	new Professional(1,
		'abc@abc.com',
		'MyPassword1!',
		new ProfessionalContact(1,'9876543210','abc road','mumbai','maharashtra',95051),
		[new ProfessionalBusiness(1, 'cooking','baking','Learn to bake cakes','I bake lovely cakes','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjByiS2j6jYxWti-miKtOhDT0pfhicHJGeeJb0GRVZaW_vwzDF',100),
		new ProfessionalBusiness(1, 'cooking','chocolates','Buy home-made chocolates','Tasty home made chocolates','https://4.imimg.com/data4/TL/EN/MY-11275158/home-250x250.png',50)]
		),
	new Professional(2,
		'xyz@xyz.com',
		'MyPassword1!',
		new ProfessionalContact(2,'9876543211','xyz road','mumbai','maharashtra',95051),
		[new ProfessionalBusiness(2, 'beauty','makeup','Look beautiful','amazing','https://search2day.com/uploads/images/332.jpg',100)]),

	];


	/*getProfessional(email: string){
		for(let professional of this.professionals){
			if(professional.p_email ===  email){
				return professional;
			}
			else{
				return -1;
			}
		}
	}*/

	checkProfessionalExists(profEmail: string,profPassword: string){

		for(let professional of this.professionals){
			if(professional.p_email ===  profEmail && professional.p_password ===  profPassword){
				//console.log(professional.p_id);
				return professional.p_id;
			}
		}
		return -1;
	}

	getProfessional(id: number){
		for(let professional of this.professionals){
			if(professional.p_id === id){
				this.p_id =id;
				this.selected_professional = professional
				return professional;
			}
		}
		return null;
	}

	getBusiness(id:number): ProfessionalBusiness{
		return this.selected_professional.p_service[id];
	}
}