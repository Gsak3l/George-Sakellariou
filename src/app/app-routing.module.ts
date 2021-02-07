import { WorkEducationComponent } from './components/work-education/work-education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'work-education', component: WorkEducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  AboutComponent,
  FeaturedComponent,
  PortfolioComponent,
  WorkEducationComponent,
];
