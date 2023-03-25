import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
