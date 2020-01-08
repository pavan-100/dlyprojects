import { NgModule, Directive } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
;
import { LoginComponent } from './pages/login/login.component';
import { WelComepageComponent } from './pages/wel-comepage/wel-comepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DirectiveComponent } from './components/directive/directive.component';


const routes: Routes = [
 { path:"",component:WelComepageComponent},
  {path:"login",component:LoginComponent},
  { path:"signup",component:SignupComponent},
  { path:'dir' , component: DirectivesComponent},
  { path:"directive" , component: DirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
