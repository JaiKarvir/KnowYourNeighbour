import { ProfessionalContact } from './professional_contact.model';
import { ProfessionalBusiness } from './professional_service.model';

export class Professional{
	/*constructor(public email: string,
				public phoneNum: number,
				public address: string,
				public city: string,
				public state: string,
				public zip: number,
				public password: string,
				public serviceType: string){}*/

	constructor(public p_id: number,
				public p_email: string,
				public p_password: string,
				public p_contact: ProfessionalContact,
				public p_service: ProfessionalBusiness[]){}
}