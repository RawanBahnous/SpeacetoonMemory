import { Component, OnInit, ViewEncapsulation ,ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ICartoon } from 'src/Models/icartoon';
import { CartoonsService } from 'src/Services/cartoons.service';

@Component({
  selector: 'app-cartoondetails',
  templateUrl: './cartoondetails.component.html',
  // encapsulation: ViewEncapsulation.None ,
  styles: [
  ]
})
export class CartoondetailsComponent implements OnInit {
  cartoon:any;
  cartoonID:any;
  constructor(private serv: CartoonsService ,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.refreshData(this.cartoonID)

  this.route.paramMap.subscribe(
  (res)=>{
    this.cartoonID = res.get('id');
    console.log(+this.cartoonID);
    this.cartoon = this.serv.getCartoonByID(+this.cartoonID)
    console.log(this.cartoon);
  });


    this.refreshData(this.cartoonID)
  }

  private refreshData(id: any): void {
    // Call your service method to refresh the 'cartoon' data
    this.cartoon = this.serv.getCartoonByID(id);
  }
}
