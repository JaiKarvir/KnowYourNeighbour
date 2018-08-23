import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfessionalService } from './professional/professional.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

	constructor(private professionalService: ProfessionalService, private router: Router){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return this.professionalService.isAuthenticated().then(
			(authenticated: boolean)=>{
				if(authenticated){
					return true;
				}else{
                   this.router.navigate(['/professional']);
				}
			}
			);
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return this.canActivate(route,state);
	}
}