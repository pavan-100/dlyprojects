import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { BannerComponent } from './components/banner/banner.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WelComepageComponent } from './pages/wel-comepage/wel-comepage.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { PropertyComponent } from './components/property/property.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    BannerComponent,
    LoginComponent,
    SignupComponent,
    WelComepageComponent,
    DirectivesComponent,
    DirectiveComponent,
    ProfilesComponent,
    PropertyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
