import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPopper } from 'angular-popper';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { ProfessionalComponent } from './professional/professional.component';
import { LoginComponent } from './professional/login/login.component';
import { RegisterComponent } from './professional/register/register.component';
import { ProfHomepageComponent } from './professional/prof-homepage/prof-homepage.component';
import { ProfServicesListComponent } from './professional/prof-homepage/prof-services-list/prof-services-list.component';
import { ProfServiceItemComponent } from './professional/prof-homepage/prof-services-list/prof-service-item/prof-service-item.component';
import { ProfServiceStartComponent } from './professional/prof-homepage/prof-service-start/prof-service-start.component';
import { ProfServiceDetailComponent } from './professional/prof-homepage/prof-service-detail/prof-service-detail.component';
import { ProfServiceEditComponent } from './professional/prof-homepage/prof-service-edit/prof-service-edit.component';
import { DataStorageService } from './shared/data-storage.service';
import { AuthGuard } from './auth-guard.service';
import { ProfessionalStartComponent } from './professional/professional-start/professional-start.component';
import { ProfessionalService } from './professional/professional.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    UserComponent,
    ProfessionalComponent,
    LoginComponent,
    RegisterComponent,
    ProfHomepageComponent,
    ProfServicesListComponent,
    ProfServiceItemComponent,
    ProfServiceStartComponent,
    ProfServiceDetailComponent,
    ProfServiceEditComponent,
    ProfessionalStartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NgxPopper,
    AppRoutingModule
  ],
  providers: [ ProfessionalService,DataStorageService, AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }
