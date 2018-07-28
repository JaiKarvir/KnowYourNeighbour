import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthComponent } from './auth/auth.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AuthComponent,
    ServiceProviderComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
