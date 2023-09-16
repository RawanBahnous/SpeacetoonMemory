import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { CartoondetailsComponent } from './Components/cartoondetails/cartoondetails.component';
import { HomeComponent } from './Components/home/home.component';
import { filter } from 'rxjs/operators';
import { TopcartoonsComponent } from './Components/topcartoons/topcartoons.component';
import { TestComponent } from './Components/test/test.component';

const routes: Routes = [
  {path: '',component: HomeComponent },
  {path: 'home',component: HomeComponent },
  {path:"cartoondetails/:id",component:CartoondetailsComponent},
  {path:"test",component:TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // Scroll to the top of the page when a route changes
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
 }
