import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private productService: ProductService){}

  buyNow(price: number){
    this.productService.executePurchase(price).subscribe(() => {
      
    })
  }

  ngOnInit(): void {
  }

}
