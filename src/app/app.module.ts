import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabrComponent } from './Components/navabr/navabr.component';
import { SliderComponent } from './Components/slider/slider.component';
import { TopcartoonsComponent } from './Components/topcartoons/topcartoons.component';
import { TestComponent } from './Components/test/test.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CartoondetailsComponent } from './Components/cartoondetails/cartoondetails.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    SliderComponent,
    TopcartoonsComponent,
    TestComponent,
    FooterComponent,
    CartoondetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
