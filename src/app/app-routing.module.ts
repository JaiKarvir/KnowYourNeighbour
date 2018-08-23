import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ProfHomepageComponent } from './professional/prof-homepage/prof-homepage.component';
import { ProfServiceEditComponent } from './professional/prof-homepage/prof-service-edit/prof-service-edit.component';
import { ProfServiceStartComponent } from './professional/prof-homepage/prof-service-start/prof-service-start.component';
import { ProfServiceDetailComponent } from './professional/prof-homepage/prof-service-detail/prof-service-detail.component';
import { ProfessionalStartComponent } from './professional/professional-start/professional-start.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
{path: '' , redirectTo: 'home', pathMatch: 'full'},
{path: 'home',component: HomepageComponent},
{path: 'user',component: UserComponent},
{path: 'professional',component: ProfessionalComponent, children:[
	{path: '', component: ProfessionalStartComponent},
	{path: ':id/prof-homepage', component: ProfHomepageComponent,canActivateChild:[AuthGuard] ,children:[
		{path: '', component: ProfServiceStartComponent},
		{path: 'new', component: ProfServiceEditComponent},
		{path: ':id', component: ProfServiceDetailComponent},
		{path: ':id/edit', component: ProfServiceEditComponent}
	]}

]}

];

@NgModule({
	imports:[
	RouterModule.forRoot(appRoutes)
	],
	exports:[RouterModule]
})
export class AppRoutingModule{

}