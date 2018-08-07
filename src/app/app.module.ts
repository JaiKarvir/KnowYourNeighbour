import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPopper } from 'angular-popper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthComponent } from './auth/auth.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ProviderLoginComponent } from './service-provider/provider-login/provider-login.component';
import { ProviderRegisterComponent } from './service-provider/provider-register/provider-register.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AuthComponent,
    ServiceProviderComponent,
    ProviderLoginComponent,
    ProviderRegisterComponent
   
  ],
  imports: [
    BrowserModule,
     NgxPopper
  
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
