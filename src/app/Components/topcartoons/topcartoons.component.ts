import { Component, OnInit } from '@angular/core';
import { ICartoon } from 'src/Models/icartoon';
import { CartoonsService } from 'src/Services/cartoons.service';

@Component({
  selector: 'app-topcartoons',
  templateUrl: './topcartoons.component.html',
  styles: []
})
export class TopcartoonsComponent implements OnInit {
  cartoonlist: ICartoon[] = [];
  currentindex = 0;
  imageperSlide = 4;

  constructor(private serv: CartoonsService) {}

  ngOnInit(): void {
     this.serv.getAllCartoons().subscribe((res)=>{
      this.cartoonlist = res;
      console.log(this.cartoonlist);

    });
    this.showSlide();
  }

  showSlide() {
    this.cartoonlist.forEach((cartoon) => {
      cartoon.display = 'none';
    });
    for (let i = this.currentindex; i < this.currentindex + this.imageperSlide; i++) {
      if (i < this.cartoonlist.length) {
        this.cartoonlist[i].display = 'block';
      }
    }
  }

  next() {
    if (this.currentindex < this.cartoonlist.length) {
      this.currentindex +=this.imageperSlide;
    }else{
      this.currentindex = 0;
    }
    this.showSlide();
  }
  prev(){
    if (this.currentindex > 0) {
      this.currentindex -= this.imageperSlide;
    }else {
      this.currentindex = this.cartoonlist.length - this.imageperSlide;
    }

    this.showSlide();

  }
}
